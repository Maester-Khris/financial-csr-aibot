import { useState } from 'react';
import { ArrowUpIcon, LockIcon, PaperclipIcon, SearchIcon, SparkleIcon, UploadIcon } from '../components/Icons';
import { StatusPill } from '../components/StatusPill';
import './Chat.css';

const SUGGESTED_PROMPTS = [
  'What was my total reported income on the 2024 T4?',
  'Show me the withholding summary',
  'Which documents still need review?',
];

export function Chat() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="chat">
      <div className="chat__topbar">
        <span className="chat__breadcrumb">
          Workspace / <span>Engagement 2024-W2-CORP</span>
        </span>
        <div className="chat__topbar-actions">
          <div className="chat__search">
            <SearchIcon size={14} />
            <input type="text" placeholder="Search vouchers, codes..." readOnly />
          </div>
          <span className="chat__avatar" aria-hidden="true" />
        </div>
      </div>

      <div className="chat__header">
        <div>
          <h1 className="chat__title">
            Tax Assistant <span className="chat__title-sep">·</span> Tax Year 2024
          </h1>
          <StatusPill variant="accent" dot>
            3 documents indexed (T4, T777S, W-2)
          </StatusPill>
        </div>
        <div className="chat__header-actions">
          <button type="button" className="btn btn-secondary">
            <UploadIcon size={14} /> Upload document
          </button>
          <button type="button" className="btn btn-secondary">
            Reset context
          </button>
        </div>
      </div>

      <div className="chat__scroll">
        <div className="chat__prompts">
          <span className="chat__prompts-label mono">SUGGESTED AUDIT INQUIRIES</span>
          <div className="chat__prompt-chips">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button type="button" className="chat__prompt-chip" key={prompt}>
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="chat__session-marker mono">SESSION INITIALIZED · 10:20 AM</div>

        {/* Turn 1 — user */}
        <div className="chat__turn chat__turn--user">
          <div className="chat__bubble chat__bubble--user">
            What was my total reported employment income for 2024 across documents?
          </div>
          <div className="chat__turn-meta mono">You · 10:23 AM</div>
        </div>

        {/* Turn 2 — assistant with citation card */}
        <div className="chat__turn chat__turn--assistant">
          <div className="chat__assistant-head">
            <SparkleIcon size={15} className="chat__sparkle" />
            <span className="chat__assistant-name">Ledger Assistant</span>
            <span className="chat__turn-meta mono">10:24 AM</span>
            <span className="chat__tag mono">Deterministic Match</span>
          </div>
          <p className="chat__prose">
            Based on your filed documents, your total reported employment income for tax year
            2024 is <span className="mono chat__figure">$94,500.00 CAD</span>. This reflects Box
            14 on your primary T4 statement from Acme Corp Technologies.
          </p>
          <div className="citation-card">
            <div className="citation-card__head">
              <span className="citation-card__doc">2024_T4_AcmeCorp.pdf</span>
              <span className="mono citation-card__loc">p. 1 · Box 14</span>
              <StatusPill variant="success" dot>
                98% Confidence Match
              </StatusPill>
            </div>
            <p className="mono citation-card__excerpt">
              "Box 14 - Employment income: 94,500.00 CAD (Location: Top-left summary block, line
              14)"
            </p>
            <div className="citation-card__foot">
              <span className="mono">SHA-256: 4f89d...3c9a · Indexed 2h ago</span>
              <a href="#source">View source rect ↗</a>
            </div>
          </div>
        </div>

        {/* Turn 3 — user */}
        <div className="chat__turn chat__turn--user">
          <div className="chat__bubble chat__bubble--user">
            Calculate my eligible home office deduction under the simplified flat rate method and
            prepare it for my ledger.
          </div>
          <div className="chat__turn-meta mono">You · 10:25 AM</div>
        </div>

        {/* Turn 4 — assistant with tool-result receipt card */}
        <div className="chat__turn chat__turn--assistant">
          <div className="chat__assistant-head">
            <SparkleIcon size={15} className="chat__sparkle" />
            <span className="chat__assistant-name">Ledger Assistant</span>
            <span className="chat__turn-meta mono">10:26 AM</span>
            <span className="chat__tag mono">Rule Engine T777S</span>
          </div>
          <p className="chat__prose">
            I've evaluated your 2024 work-from-home declaration against the CRA 2024 rule engine
            (Form T777S guidelines: 210 qualifying workdays at the standard statutory rate of{' '}
            <span className="mono chat__figure">$2.00/day</span>). Here is the proposed entry for
            your expense ledger:
          </p>

          <div className="receipt-card">
            <div className="receipt-card__head">
              <span className="mono">RULE EXECUTION #RE-8821 · 2024-10-31</span>
              <StatusPill variant="success">Verified CRA Rule</StatusPill>
            </div>
            <div className="receipt-card__amount-row">
              <div>
                <div className="receipt-card__label mono">CALCULATED DEDUCTION</div>
                <div className="receipt-card__title">Home Office Expense (Form T777S)</div>
                <div className="receipt-card__sub mono">
                  210 qualifying days × $2.00/day · Source: 2024_T777S_Declaration.pdf (p. 2, Sec.
                  B)
                </div>
              </div>
              <div className="receipt-card__amount mono">
                $420.00 <span>CAD</span>
              </div>
            </div>

            <table className="receipt-card__table mono">
              <thead>
                <tr>
                  <th>Account / Description</th>
                  <th>Debit (DR)</th>
                  <th>Credit (CR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="receipt-card__acct">GL 5410 · Office Supplies &amp; Remote Work</span>
                    <span className="receipt-card__acct-sub">Category: Statutory Deduction WFH</span>
                  </td>
                  <td className="num">$420.00</td>
                  <td className="num">—</td>
                </tr>
                <tr>
                  <td>
                    <span className="receipt-card__acct">GL 2100 · Tax Liability Offset</span>
                    <span className="receipt-card__acct-sub">Contra Account: Individual Tax Payable</span>
                  </td>
                  <td className="num">—</td>
                  <td className="num">$420.00</td>
                </tr>
              </tbody>
            </table>

            <div className="receipt-card__balance">
              <span>✓ Trial Balance: Equal DR / CR ($420.00)</span>
              <span>Posting period: 2024-Q4</span>
            </div>

            <div className="receipt-card__notice">
              <LockIcon size={12} /> Requires explicit manual confirmation before committing to
              the immutable general ledger.
            </div>

            <div className="receipt-card__actions">
              <button type="button" className="btn btn-primary">
                Post to ledger ($420.00)
              </button>
              <button type="button" className="btn btn-secondary">
                Edit parameters
              </button>
              <span className="mono receipt-card__stamp">Audit Stamp #9910-AUT</span>
            </div>
          </div>
        </div>

        {/* Turn 5 — user */}
        <div className="chat__turn chat__turn--user">
          <div className="chat__bubble chat__bubble--user">
            What was my charitable donation amount in 2024?
          </div>
          <div className="chat__turn-meta mono">You · 10:28 AM</div>
        </div>

        {/* Turn 6 — assistant, no citation, honest "not found" */}
        <div className="chat__turn chat__turn--assistant">
          <div className="chat__assistant-head">
            <SparkleIcon size={15} className="chat__sparkle" />
            <span className="chat__assistant-name">Ledger Assistant</span>
            <span className="chat__turn-meta mono">10:28 AM</span>
            <span className="chat__tag mono">Exhaustive Search</span>
          </div>
          <p className="chat__prose">
            I couldn't find any charitable donation receipts or gift declarations in your 3
            indexed tax documents for 2024. If you have an official tax receipt or donation slip,
            please upload it to the Documents section to include it in your calculations.
          </p>
          <div className="chat__upload-nudge">
            <PaperclipIcon size={16} />
            <div>
              <div className="chat__upload-nudge-title">Add official donation receipt (PDF)</div>
              <div className="chat__upload-nudge-sub">
                Supported: registered charity slips, CRA Schedule 9
              </div>
            </div>
            <button type="button" className="btn btn-secondary chat__upload-nudge-btn">
              <UploadIcon size={13} /> Upload
            </button>
          </div>
        </div>
      </div>

      <div className="chat__composer">
        <div className="chat__composer-bar">
          <PaperclipIcon size={16} className="chat__composer-icon" />
          <input
            type="text"
            className="chat__composer-input"
            placeholder="Ask about your W-2, T4, 1099, or tax rules..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <span className="mono chat__composer-tag">CRA/IRS 2024</span>
          <button type="button" className="chat__composer-send" aria-label="Send message">
            <ArrowUpIcon size={16} />
          </button>
        </div>
        <div className="chat__composer-foot">
          <span>Ledger Assistant provides audit-backed answers derived directly from indexed source records.</span>
          <span className="chat__composer-guardrail">● Zero-hallucination guardrail active</span>
        </div>
      </div>
    </div>
  );
}
