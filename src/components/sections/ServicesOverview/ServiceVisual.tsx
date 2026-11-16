'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import styles from './ServiceVisual.module.css';

interface ServiceVisualProps {
  serviceId: string;
}

export default function ServiceVisual({ serviceId }: ServiceVisualProps) {
  switch (serviceId) {
    case 'merchant-account-management':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />

          {/* Realistic Merchant Laptop Stage */}
          <div className={styles.laptopStage}>
            {/* Laptop Screen Body */}
            <div className={styles.laptopDisplay}>
              {/* Laptop Camera & Bezel Top */}
              <div className={styles.laptopBezelTop}>
                <span className={styles.laptopWebcam} />
              </div>

              {/* Laptop Screen Viewport */}
              <div className={styles.laptopScreenViewport}>
                {/* Store Top Navigation Bar */}
                <div className={styles.laptopBrowserBar}>
                  <div className={styles.laptopDots}>
                    <span className={styles.lDot} />
                    <span className={styles.lDot} />
                    <span className={styles.lDot} />
                  </div>
                  <div className={styles.laptopUrlBar}>
                    <span className={styles.laptopLock}>🔒</span>
                    <span>Merchant account support</span>
                  </div>
                  <div className={styles.laptopLivePill}>
                    <span className={styles.pulseDot} />
                    <span>ACCOUNT SUPPORT</span>
                  </div>
                </div>

                {/* Merchant Operating Console Screen Content */}
                <div className={styles.laptopConsoleBody}>
                  {/* Account support overview */}
                  <div className={styles.consoleKpiRow}>
                    <div className={styles.consoleKpiCard}>
                      <div className={styles.kpiIconPound}>
                        <CurrencyPoundIcon fontSize="small" />
                      </div>
                      <div className={styles.kpiInfo}>
                        <span className={styles.kpiLabel}>Account focus</span>
                        <span className={styles.kpiValue}>Payment operations</span>
                      </div>
                      {/* <div className={styles.kpiGrowthBadge}>
                        <ArrowUpwardIcon sx={{ fontSize: 11 }} />
                        <span>+32.6%</span>
                      </div> */}
                    </div>

                    <div className={styles.consoleKpiCard}>
                      <div className={styles.kpiIconCart}>
                        <ShoppingCartOutlinedIcon fontSize="small" />
                      </div>
                      <div className={styles.kpiInfo}>
                        <span className={styles.kpiLabel}>Support scope</span>
                        <span className={styles.kpiValue}>Merchant accounts</span>
                      </div>
                      {/* <div className={styles.kpiGrowthBadge}>
                        <ArrowUpwardIcon sx={{ fontSize: 11 }} />
                        <span>+18.4%</span>
                      </div> */}
                    </div>
                  </div>

                  {/* Illustrative transaction activity */}
                  <div className={styles.chartVisualBlock}>
                    <div className={styles.chartHeader}>
                      <div className={styles.chartTitleGroup}>
                        <ShowChartIcon fontSize="small" className={styles.chartTrendIcon} />
                        <span className={styles.chartTitle}>Transaction monitoring overview</span>
                      </div>
                      <span className={styles.chartTimeframe}>Illustrative activity view</span>
                    </div>

                    {/* Interactive SVG Growth Graph with Area Fill */}
                    <div className={styles.svgGraphWrapper}>
                      <svg
                        viewBox="0 0 380 90"
                        className={styles.growthSvg}
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Horizontal Gridlines */}
                        <line x1="0" y1="20" x2="380" y2="20" stroke="var(--color-border-subtle)" strokeDasharray="4 4" />
                        <line x1="0" y1="50" x2="380" y2="50" stroke="var(--color-border-subtle)" strokeDasharray="4 4" />
                        <line x1="0" y1="80" x2="380" y2="80" stroke="var(--color-border-subtle)" />

                        {/* Shaded Area under Curve */}
                        <path
                          d="M 0 75 Q 40 68, 80 58 T 160 48 T 240 32 T 320 20 T 380 10 L 380 90 L 0 90 Z"
                          fill="url(#growthGrad)"
                        />

                        {/* Bold Growth Trajectory Line */}
                        <path
                          d="M 0 75 Q 40 68, 80 58 T 160 48 T 240 32 T 320 20 T 380 10"
                          fill="none"
                          stroke="var(--color-blue)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Key Milestones on Growth Curve */}
                        <circle cx="80" cy="58" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="160" cy="48" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="240" cy="32" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="320" cy="20" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="380" cy="10" r="4.5" fill="var(--color-blue)" stroke="var(--color-surface)" strokeWidth="2" />
                      </svg>

                      <div className={styles.floatingPeakPill}>
                        <span>Activity review</span>
                      </div>
                    </div>
                  </div>

                  {/* Account management support areas */}
                  <div className={styles.merchantChannelFooter}>
                    <div className={styles.channelItem}>
                      <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                      <span>Marketplace accounts</span>
                    </div>
                    <div className={styles.channelItem}>
                      <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                      <span>Gateway settings</span>
                    </div>
                    <div className={styles.channelItem}>
                      <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                      <span>Settlement reconciliation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Realistic Laptop Base & Trackpad */}
            <div className={styles.laptopBase}>
              <div className={styles.laptopNotch} />
            </div>
            <div className={styles.laptopBottomLip} />
          </div>

          {/* Floating Companion Badge: Live Cart Checkout */}
          <div className={styles.floatingCartBadge}>
            <div className={styles.cartBadgeIcon}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </div>
            <div className={styles.cartBadgeText}>
              <span className={styles.cartBadgeTitle}>Live Cart Conversion</span>
              <span className={styles.cartBadgeSub}>
                Avg Basket: <strong>£68.50</strong>
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
