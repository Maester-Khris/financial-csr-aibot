import { useState } from 'react';
import { StatusPill } from '../components/StatusPill';
import { UploadIcon } from '../components/Icons';
import './Documents.css';

type DocStatus = 'pending' | 'needs_review' | 'indexed';

type DocRow = {
  name: string;
  sourceType: string;
  ingestedAt: string;
  status: DocStatus;
  dropRate: string | null;
};

const DOCS: DocRow[] = [
  {
    name: '2024_T4_AcmeCorp.pdf',
    sourceType: 'tax_slip',
    ingestedAt: '2024-04-18 14:22:09 UTC',
    status: 'indexed',
    dropRate: '1.2%',
  },
  {
    name: '2023_Form_1065_K1_ApexHoldings.pdf',
    sourceType: 'k1_schedule',
    ingestedAt: '2024-04-18 14:22:09 UTC',
    status: 'needs_review',
    dropRate: '4.7%',
  },
  {
    name: 'Q4_State_Nexus_Apportionment_Schedule.xlsx',
    sourceType: 'state_schedule',
    ingestedAt: '2024-04-18 11:05:44 UTC',
    status: 'needs_review',
    dropRate: '6.3%',
  },
  {
    name: 'Depreciation_MACRS_Asset_Disposal_Batch_04.pdf',
    sourceType: 'depreciation_schedule',
    ingestedAt: '2024-04-17 19:40:12 UTC',
    status: 'needs_review',
    dropRate: '5.9%',
  },
  {
    name: '2024_T777S_Declaration.pdf',
    sourceType: 'expense_declaration',
    ingestedAt: '2024-04-17 09:12:03 UTC',
    status: 'indexed',
    dropRate: '0.8%',
  },
  {
    name: '2024_W2_AcmeCorp.pdf',
    sourceType: 'tax_slip',
    ingestedAt: '2024-04-16 08:03:11 UTC',
    status: 'indexed',
    dropRate: '1.5%',
  },
  {
    name: 'US_Form_941_Q4_2024_Final.pdf',
    sourceType: 'payroll_form',
    ingestedAt: '2024-04-15 16:45:00 UTC',
    status: 'indexed',
    dropRate: '0.4%',
  },
  {
    name: '2024_Schedule_C_SoleProp.pdf',
    sourceType: 'schedule_c',
    ingestedAt: '2024-04-14 10:20:00 UTC',
    status: 'pending',
    dropRate: null,
  },
  {
    name: 'GL_Expense_Ledger_Q3.csv',
    sourceType: 'general_ledger_export',
    ingestedAt: '2024-04-12 09:00:00 UTC',
    status: 'pending',
    dropRate: null,
  },
];

const FILTERS: { id: 'all' | DocStatus; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'pending', label: 'Pending' },
  { id: 'needs_review', label: 'Needs review' },
  { id: 'indexed', label: 'Indexed' },
];

function statusPill(status: DocStatus) {
  if (status === 'indexed') return <StatusPill variant="success" dot>indexed</StatusPill>;
  if (status === 'needs_review') return <StatusPill variant="warning" dot>needs_review</StatusPill>;
  return <StatusPill variant="neutral" dot>pending</StatusPill>;
}

export function Documents() {
  const [filter, setFilter] = useState<'all' | DocStatus>('all');

  const rows = filter === 'all' ? DOCS : DOCS.filter((d) => d.status === filter);
  const needsReviewCount = DOCS.filter((d) => d.status === 'needs_review').length;

  return (
    <div className="documents">
      <div className="documents__topbar">
        <span className="documents__breadcrumb">
          Ledger Assistant / <span>Document Library</span>
        </span>
        <span className="documents__avatar" aria-hidden="true" />
      </div>

      <div className="documents__body">
        <div className="documents__header">
          <div>
            <h1 className="documents__title">Documents</h1>
            <p className="documents__subtitle">
              Every uploaded document and its ingestion pipeline status — OCR extraction,
              confidence filtering, chunking, embedding.
            </p>
          </div>
          <button type="button" className="btn btn-primary">
            <UploadIcon size={14} /> Upload document
          </button>
        </div>

        <div className="documents__filters">
          {FILTERS.map((f) => (
            <button
              type="button"
              key={f.id}
              className={`documents__filter-chip${filter === f.id ? ' documents__filter-chip--active' : ''}${
                f.id === 'needs_review' ? ' documents__filter-chip--warning' : ''
              }`}
              onClick={() => setFilter(f.id)}
            >
              {f.id === 'needs_review' && <span className="documents__filter-dot documents__filter-dot--warning" />}
              {f.id === 'indexed' && <span className="documents__filter-dot documents__filter-dot--success" />}
              {f.label}
              {f.id === 'needs_review' && (
                <span className="mono documents__filter-count">{needsReviewCount}</span>
              )}
            </button>
          ))}
        </div>

        <div className="panel documents__table-panel">
          <div className="scroll-x">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Document name</th>
                  <th>Source type</th>
                  <th>Ingested at</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Confidence drop-rate</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name} className={row.status === 'needs_review' ? 'flagged' : undefined}>
                    <td>{row.name}</td>
                    <td className="mono">{row.sourceType}</td>
                    <td className="mono">{row.ingestedAt}</td>
                    <td>{statusPill(row.status)}</td>
                    <td className="num">{row.dropRate ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
