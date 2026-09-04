import { useState } from 'react';
import { LockIcon, SearchIcon } from '../components/Icons';
import { StatusPill } from '../components/StatusPill';
import './Ledger.css';

type Posting = {
  id: string;
  description: string;
  chatRef: string;
  rule: string;
  amount: string;
  createdAt: string;
  sourceDoc: string;
  sourcePage: string;
  coordinates: string;
  toolInvocation: string;
  confirmationHash: string;
  debitAccount: string;
  creditAccount: string;
};

const POSTINGS: Posting[] = [
  {
    id: 'pst_98f102a4',
    description: 'Total reported employment income — T4 2024',
    chatRef: 'Chat #1084',
    rule: 'T4-Box14-Gross',
    amount: '$142,500.00',
    createdAt: '2024-04-18 14:22:04 UTC',
    sourceDoc: 'T4_2024_Executive.pdf',
    sourcePage: 'Page 2 · Box 14',
    coordinates: '[x: 140pt, y: 420pt]',
    toolInvocation: 'rule_engine.compute_box14_taxable_gross',
    confirmationHash: '0x4f8a...c92e',
    debitAccount: 'Account 5010 · Gross Salary Expense',
    creditAccount: 'Account 2100 · Payroll Clearing & Taxes Payable',
  },
  {
    id: 'pst_77e034bc',
    description: 'Eligible medical expenses deduction rollup',
    chatRef: 'Chat #1079',
    rule: 'Med-Expense-Aggr',
    amount: '$8,420.50',
    createdAt: '2024-04-18 11:05:12 UTC',
    sourceDoc: 'Medical_Expense_Summary_2024.pdf',
    sourcePage: 'Page 1 · Table 2',
    coordinates: '[x: 96pt, y: 260pt]',
    toolInvocation: 'rule_engine.compute_medical_expense_rollup',
    confirmationHash: '0x71bd...4a12',
    debitAccount: 'Account 5620 · Medical Expense Deduction',
    creditAccount: 'Account 2100 · Payroll Clearing & Taxes Payable',
  },
  {
    id: 'pst_62d891ce',
    description: 'Registered Retirement Savings Plan (RRSP) contribution',
    chatRef: 'Chat #1072',
    rule: 'RRSP-Max-Limit',
    amount: '$22,000.00',
    createdAt: '2024-04-17 09:33:50 UTC',
    sourceDoc: 'RRSP_Contribution_Slip_2024.pdf',
    sourcePage: 'Page 1 · Box 1',
    coordinates: '[x: 112pt, y: 188pt]',
    toolInvocation: 'rule_engine.compute_rrsp_deduction_limit',
    confirmationHash: '0x0c3e...78f1',
    debitAccount: 'Account 5710 · RRSP Contribution Deduction',
    creditAccount: 'Account 2100 · Payroll Clearing & Taxes Payable',
  },
  {
    id: 'pst_44a109fe',
    description: 'T5 Investment income — eligible dividends gross-up',
    chatRef: 'Chat #1066',
    rule: 'T5-Div-GrossUp',
    amount: '$14,350.25',
    createdAt: '2024-04-16 16:15:30 UTC',
    sourceDoc: 'T5_2024_InvestmentIncome.pdf',
    sourcePage: 'Page 1 · Box 24',
    coordinates: '[x: 150pt, y: 340pt]',
    toolInvocation: 'rule_engine.compute_dividend_gross_up',
    confirmationHash: '0x9a2f...e610',
    debitAccount: 'Account 4210 · Investment Income',
    creditAccount: 'Account 2100 · Payroll Clearing & Taxes Payable',
  },
  {
    id: 'pst_31b74281',
    description: 'Charitable donations tax credit base calculation',
    chatRef: 'Chat #1059',
    rule: 'Charity-Fed-Tier',
    amount: '$3,500.00',
    createdAt: '2024-04-15 13:40:18 UTC',
    sourceDoc: 'Charitable_Donation_Receipts_2024.pdf',
    sourcePage: 'Page 1 · Summary',
    coordinates: '[x: 88pt, y: 210pt]',
    toolInvocation: 'rule_engine.compute_charitable_credit_base',
    confirmationHash: '0x53d8...1bf7',
    debitAccount: 'Account 5810 · Charitable Contribution Credit',
    creditAccount: 'Account 2100 · Payroll Clearing & Taxes Payable',
  },
];

export function Ledger() {
  const [selectedId, setSelectedId] = useState(POSTINGS[0].id);
  const selected = POSTINGS.find((p) => p.id === selectedId) ?? POSTINGS[0];

  return (
    <div className="ledger">
      <div className="ledger__topbar">
        <span className="ledger__breadcrumb">
          Ledger Console / <span>Postings</span>
        </span>
        <div className="ledger__topbar-actions">
          <div className="ledger__search">
            <SearchIcon size={14} />
            <input type="text" placeholder="Search ledgers, entries, coordinates..." readOnly />
          </div>
          <span className="ledger__avatar" aria-hidden="true" />
        </div>
      </div>

      <div className="ledger__body">
        <div className="ledger__header">
          <h1 className="ledger__title">
            Postings
            <span className="ledger__readonly-badge mono">
              <LockIcon size={11} /> Read-only — created via chat
            </span>
          </h1>
          <p className="ledger__subtitle">
            Audited journal entries generated exclusively by confirmed rule-engine executions in
            Chat Assistant sessions.
          </p>
        </div>

        <div className="ledger__toolbar">
          <div className="ledger__filter-input">
            <SearchIcon size={14} />
            <input type="text" placeholder="Filter by posting ID, document, or memo..." readOnly />
          </div>
          <button type="button" className="btn btn-secondary">
            Current fiscal year (2024)
          </button>
          <StatusPill variant="accent" dot>
            {POSTINGS.length} filtered postings
          </StatusPill>
        </div>

        <div className="ledger__grid">
          <div className="panel ledger__table-panel">
            <div className="scroll-x">
              <table className="data-table">
                <colgroup>
                  <col className="col-id" />
                  <col className="col-desc" />
                  <col className="col-amount" />
                  <col className="col-created" />
                  <col className="col-source" />
                  <col className="col-status" />
                </colgroup>
                <thead>
                  <tr>
                    <th>Posting ID</th>
                    <th>Description</th>
                    <th style={{ textAlign: 'right' }}>Amount</th>
                    <th>Created at</th>
                    <th>Source</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {POSTINGS.map((posting) => (
                    <tr
                      key={posting.id}
                      className={posting.id === selectedId ? 'ledger__row--selected' : undefined}
                      onClick={() => setSelectedId(posting.id)}
                    >
                      <td className="mono">{posting.id}</td>
                      <td>
                        <div className="ledger__desc">{posting.description}</div>
                        <div className="ledger__desc-sub mono">
                          Confirmed in {posting.chatRef} · Rule: {posting.rule}
                        </div>
                      </td>
                      <td className="num">{posting.amount}</td>
                      <td className="mono">{posting.createdAt}</td>
                      <td>
                        <a href="#source" onClick={(e) => e.stopPropagation()}>
                          {posting.sourceDoc.replace(/\.pdf$/, '')} · {posting.sourcePage.split(' · ')[0]}
                        </a>
                      </td>
                      <td>
                        <StatusPill variant="success">Balanced</StatusPill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ledger__table-foot">
              <span>Showing {POSTINGS.length} postings</span>
              <span className="mono">Net Ledger Invariant: 0.00 USD (All balanced)</span>
            </div>
          </div>

          <aside className="panel ledger__detail-panel">
            <div className="ledger__detail-head">
              <span className="mono ledger__detail-id">POSTING RECORD (READ-ONLY)</span>
              <span className="ledger__detail-id-value mono">{selected.id}</span>
              <StatusPill variant="neutral">Immutable</StatusPill>
            </div>

            <h2 className="ledger__detail-desc">{selected.description}</h2>
            <div className="ledger__detail-amount mono">{selected.amount}</div>
            <StatusPill variant="success">Balanced</StatusPill>
            <div className="ledger__detail-finalized">Posting finalized: {selected.createdAt}</div>

            <div className="ledger__detail-section">
              <div className="ledger__detail-section-head">
                <span>Double entry journal breakdown</span>
                <span className="status-pill status-pill--accent mono">Net Zero Invariant</span>
              </div>
              <table className="ledger__journal mono">
                <thead>
                  <tr>
                    <th>Account &amp; class</th>
                    <th style={{ textAlign: 'right' }}>Debit</th>
                    <th style={{ textAlign: 'right' }}>Credit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ledger__journal-acct">{selected.debitAccount}</td>
                    <td className="num">{selected.amount}</td>
                    <td className="num">—</td>
                  </tr>
                  <tr>
                    <td className="ledger__journal-acct">{selected.creditAccount}</td>
                    <td className="num">—</td>
                    <td className="num">{selected.amount}</td>
                  </tr>
                </tbody>
              </table>
              <div className="ledger__net-zero">✓ Net Zero Check: $0.00 verified</div>
            </div>

            <div className="ledger__detail-section">
              <div className="ledger__detail-section-head">
                <span>Provenance &amp; audit trail</span>
              </div>
              <dl className="ledger__provenance">
                <dt>Source document</dt>
                <dd>{selected.sourceDoc}</dd>
                <dt>Coordinates</dt>
                <dd className="mono">
                  {selected.sourcePage} {selected.coordinates}
                </dd>
                <dt>Execution origin</dt>
                <dd>{selected.chatRef}</dd>
                <dt>Tool invocation</dt>
                <dd className="mono">{selected.toolInvocation}</dd>
                <dt>Confirmation hash</dt>
                <dd className="mono">{selected.confirmationHash}</dd>
              </dl>
              <div className="ledger__detail-links">
                <a href="#source">View source document →</a>
                <a href="#chat">View in {selected.chatRef.toLowerCase()} →</a>
              </div>
            </div>

            <div className="ledger__protocol-notice">
              <strong>Protocol notice:</strong> all ledger records are immutable snapshots
              produced by confirmed chat operations. Manual mutation is disallowed by protocol.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
