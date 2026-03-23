import { useState, useEffect, useRef } from "react";

// ============================================================================
// ALL STAR REFRIGERATION — Full Multi-Page Business Website
// Design: Warm industrial — honest, grounded, Phoenix-rooted
// Typography: Archivo Black (display) + DM Sans (body)
// Palette: Midnight navy, flame orange, cooling teal, desert sand
// ============================================================================

// --------------- ICONS ---------------
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MenuIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
const XIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>;
const StarIcon = ({ filled = true }) => <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#D4A547" : "none"} stroke="#D4A547" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>;
const ClockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
const ShieldIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const ThermIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v10"/><path d="M18.4 8a8 8 0 1 1-12.8 0"/></svg>;
const WrenchIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const ChartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>;
const HeartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const MapPinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>;
const UserIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const ArrowRightIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const SnowflakeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5M2 12h20M7 7l-5 5 5 5M17 7l5 5-5 5"/></svg>;
const SunIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
const FanIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 12c-3 0-5.2-2.8-5-5.6C7.2 3.2 9 2 12 2s4.8 1.2 5 3.4c.2 2.8-2 5.6-5 5.6z"/><path d="M12 12c0 3-2.8 5.2-5.6 5C3.2 16.8 2 15 2 12s1.2-4.8 3.4-5c2.8-.2 5.6 2 5.6 5z"/><path d="M12 12c3 0 5.2 2.8 5 5.6-.2 3.2-2 3.4-5 3.4s-4.8-1.2-5-3.4c-.2-2.8 2-5.6 5-5.6z"/><path d="M12 12c0-3 2.8-5.2 5.6-5 3.2.2 3.4 2 3.4 5s-1.2 4.8-3.4 5c-2.8.2-5.6-2-5.6-5z"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>;
const ChevronDown = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>;
const ThumbsUpIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>;
const UsersIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;

const LogoImg = ({ height = 52, dark = false }) => {
  const s = height * 0.82;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: height * 0.22 }}>
      <svg width={s} height={s} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="lg_r" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#EF4444"/><stop offset="100%" stopColor="#B91C1C"/></linearGradient>
          <linearGradient id="lg_b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B82F6"/><stop offset="100%" stopColor="#1D4ED8"/></linearGradient>
          <clipPath id="ch_t"><rect x="0" y="0" width="100" height="50"/></clipPath>
          <clipPath id="ch_b"><rect x="0" y="50" width="100" height="50"/></clipPath>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#lg_r)" clipPath="url(#ch_t)"/>
        <circle cx="50" cy="50" r="46" fill="url(#lg_b)" clipPath="url(#ch_b)"/>
        <ellipse cx="50" cy="50" rx="50" ry="8" fill={dark ? 'rgba(255,255,255,0.12)' : 'white'} opacity="0.9"/>
        {/* Flame – simplified, more vertical shape with inner highlight */}
        <path
          d="M50 6
             C46 12, 44 16.5, 44 22
             C44 27, 46.5 31, 50 34
             C53.5 31, 56 27, 56 22
             C56 16.5, 54 12, 50 6 Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M50 11
             C47.5 15, 46.5 18, 46.5 21.5
             C46.5 24.8, 48 27.2, 50 28.8
             C52 27.2, 53.5 24.8, 53.5 21.5
             C53.5 18, 52.5 15, 50 11 Z"
          fill="rgba(255,255,255,0.7)"
        />
        {/* Snowflake */}
        <g transform="translate(50,72)" stroke="white" strokeWidth="2.8" strokeLinecap="round" opacity="0.92">
          <line x1="0" y1="-10" x2="0" y2="10"/>
          <line x1="-8.66" y1="-5" x2="8.66" y2="5"/>
          <line x1="-8.66" y1="5" x2="8.66" y2="-5"/>
        </g>
      </svg>
      <div style={{ lineHeight: 1.05 }}>
        <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: height * 0.36, color: dark ? '#fff' : '#B91C1C', whiteSpace: 'nowrap' }}>All Star</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: height * 0.17, fontWeight: 700, color: dark ? 'rgba(255,255,255,0.55)' : '#1D4ED8', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 2 }}>Refrigeration</div>
      </div>
    </div>
  );
};

// --------------- STYLES ---------------
const injectStyles = () => {
  if (document.getElementById('allstar-styles')) return;
  const style = document.createElement('style');
  style.id = 'allstar-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
    
    :root {
      --flame: #C41E24;
      --flame-dark: #A01A1F;
      --cool: #1565A0;
      --cool-deep: #0D4A78;
      --ice: #D6E9F8;
      --midnight: #0D1B2A;
      --warm-white: #FAFAFA;
      --sand: #F0EDE8;
      --charcoal: #1A1A1A;
      --gold: #D4A547;
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes heatPulse {
      0% { left: -100%; } 100% { left: 100%; }
    }
    @keyframes phoneRing {
      0%,100% { transform: rotate(0); }
      10% { transform: rotate(14deg); }
      20% { transform: rotate(-10deg); }
      30% { transform: rotate(8deg); }
      40% { transform: rotate(-4deg); }
      50% { transform: rotate(0); }
    }
    @keyframes dotPulse {
      0%,100% { opacity:1; transform:scale(1); }
      50% { opacity:0.4; transform:scale(0.7); }
    }
    @keyframes shimmer {
      from { transform: translateX(0); } to { transform: translateX(50%); }
    }
    @keyframes tempPulse {
      0%,100% { transform:scale(1); opacity:0.5; }
      50% { transform:scale(1.08); opacity:0.2; }
    }
    
    .anim-fadeInUp { animation: fadeInUp 0.7s ease-out both; }
    .anim-d1 { animation-delay: 0.1s; }
    .anim-d2 { animation-delay: 0.2s; }
    .anim-d3 { animation-delay: 0.3s; }
    .anim-d4 { animation-delay: 0.4s; }
    .anim-d5 { animation-delay: 0.5s; }
    .anim-d6 { animation-delay: 0.6s; }
    .anim-d7 { animation-delay: 0.7s; }
    .anim-d8 { animation-delay: 0.8s; }

    .allstar-mobile-cta {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px 16px env(safe-area-inset-bottom);
      background: linear-gradient(90deg, var(--flame-dark), var(--cool-deep));
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      z-index: 120;
      font-family: 'DM Sans', sans-serif;
      box-shadow: 0 -6px 20px rgba(0,0,0,0.25);
    }
    .allstar-mobile-cta button {
      flex: 1;
      border-radius: 999px;
      padding: 12px 18px;
      border: none;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
    }
    .allstar-mobile-cta__request {
      background: #ffffff;
      color: var(--flame-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-decoration: none;
      max-width: 420px;
      margin: 0 auto;
      width: 100%;
    }
    @media (min-width: 900px) {
      .allstar-mobile-cta { display: none; }
    }
    @media (max-width: 899px) {
      .allstar-mobile-cta { display: flex; }
    }

    .photo-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    .photo-strip__item {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      min-height: 180px;
      background-size: cover;
      background-position: center;
      box-shadow: 0 10px 30px rgba(15,23,42,0.25);
    }

    .photo-strip__item::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.8));
    }

    .photo-strip__label {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 14px;
      z-index: 1;
      color: #F9FAFB;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .service-detail-hero-section {
      padding: clamp(28px, 4vw, 52px) clamp(20px, 3.5vw, 64px) !important;
    }
    .service-detail-hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.08fr) minmax(220px, 0.78fr);
      gap: clamp(18px, 3vw, 36px);
      align-items: center;
      width: 100%;
    }
    @media (max-width: 820px) {
      .service-detail-hero-grid {
        grid-template-columns: 1fr;
      }
    }
    .service-detail-van-photo {
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 16px 40px rgba(0,0,0,0.32);
      max-height: min(360px, 44vh);
    }
    .service-detail-van-photo img {
      width: 100%;
      height: 100%;
      max-height: min(360px, 44vh);
      object-fit: cover;
      object-position: center;
      display: block;
    }

    /* Emergency repair / maintenance: two-column included section */
    .repair-included-section {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
      gap: clamp(20px, 3vw, 36px);
      align-items: start;
      max-width: 1100px;
      margin: 0 auto;
    }
    /* Install (and legacy): paired rows — text + photo per row */
    .repair-included-paired-rows {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(260px, min(38vw, 400px));
      grid-template-rows: auto auto auto;
      column-gap: clamp(22px, 3.5vw, 40px);
      row-gap: clamp(16px, 2.5vw, 22px);
      align-items: start;
      max-width: 1100px;
      margin: 0 auto;
    }
    .repair-included-paired-rows .repair-pair-right {
      width: 100%;
      max-width: min(400px, 100%);
      justify-self: end;
      min-width: 0;
    }
    .repair-left-what {
      grid-column: 1;
      grid-row: 1;
    }
    .repair-right-p1 {
      grid-column: 2;
      grid-row: 1;
    }
    .repair-left-when {
      grid-column: 1;
      grid-row: 2;
    }
    .repair-right-p2 {
      grid-column: 2;
      grid-row: 2;
    }
    .repair-right-p3 {
      grid-column: 2;
      grid-row: 3;
    }
    /* Install page: paired rows — 4:3 tiles (was 160px cap; too short on desktop) */
    .install-pair-rows .repair-pair-right .install-pair-photo-grid__item {
      display: block;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 10px 36px rgba(15,23,42,0.08);
      width: 100%;
      aspect-ratio: 4 / 3;
      max-height: min(280px, 40vh);
      min-height: 0;
      height: auto;
    }
    .install-pair-rows .repair-pair-right .install-pair-photo-grid__item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    .repair-included-stack {
      grid-template-columns: minmax(0, 1fr) minmax(260px, min(38vw, 400px));
      gap: clamp(24px, 4vw, 40px) clamp(22px, 3.5vw, 40px);
      align-items: start;
    }
    .repair-photos-stack {
      display: flex;
      flex-direction: column;
      gap: clamp(16px, 2.5vw, 22px);
      width: 100%;
      max-width: min(400px, 100%);
      margin-left: auto;
      min-width: 0;
    }
    .repair-photos-stack .repair-photo-tile--pair {
      flex: 0 0 auto;
      width: 100%;
      aspect-ratio: 4 / 3;
      max-height: min(220px, 30vh);
      min-height: 0;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 10px 36px rgba(15,23,42,0.08);
    }
    .repair-photos-stack .repair-photo-tile--pair img {
      width: 100%;
      height: 100%;
      min-height: 0;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    @media (max-width: 900px) {
      .repair-included-section {
        grid-template-columns: 1fr;
      }
      .repair-included-stack {
        grid-template-columns: 1fr !important;
      }
      .repair-included-paired-rows {
        grid-template-columns: 1fr !important;
        grid-template-rows: auto !important;
      }
      .repair-included-paired-rows .repair-left-what,
      .repair-included-paired-rows .repair-left-when,
      .repair-included-paired-rows .repair-right-p1,
      .repair-included-paired-rows .repair-right-p2,
      .repair-included-paired-rows .repair-right-p3 {
        grid-column: auto !important;
        grid-row: auto !important;
        justify-self: stretch !important;
        max-width: none !important;
      }
      .repair-section-photos {
        margin-left: 0 !important;
        max-width: none !important;
      }
      .repair-photos-stack {
        margin-left: 0 !important;
        max-width: none !important;
      }
      .install-included-layout {
        grid-template-columns: 1fr !important;
      }
      .install-included-aside {
        margin-left: 0 !important;
        max-width: none !important;
      }
      .install-pair-rows .repair-pair-right .install-pair-photo-grid__item {
        height: auto !important;
        max-height: none !important;
      }
    }
    .repair-section-photos {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      max-width: 300px;
      margin-left: auto;
    }
    .repair-photo-tile {
      width: 100%;
      aspect-ratio: 4 / 3;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 10px 36px rgba(15,23,42,0.08);
      flex-shrink: 0;
    }
    .repair-photo-tile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    /* AC install: optional 2-up grid — row height matches paired-row tiles */
    .install-pair-photo-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: minmax(0, min(280px, 40vh));
      gap: 10px;
      flex: 0 0 auto;
      min-height: 0;
      max-height: min(280px, 40vh);
      min-width: 0;
      width: 100%;
    }
    .install-pair-photo-grid__item {
      display: block;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 10px 36px rgba(15,23,42,0.08);
      min-height: 0;
      max-height: 100%;
    }
    .install-pair-photo-grid__item img {
      width: 100%;
      height: 100%;
      min-height: 0;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    /* AC install: copy stacked on left, photos stacked on right — avoids 2×2 row-height gap */
    .install-included-layout {
      grid-template-columns: minmax(0, 1fr) minmax(260px, min(38vw, 400px));
      gap: clamp(20px, 3vw, 36px) clamp(22px, 3.5vw, 40px);
    }
    .install-included-aside {
      display: flex;
      flex-direction: column;
      gap: clamp(14px, 2.5vw, 20px);
      width: 100%;
      max-width: min(400px, 100%);
      margin-left: auto;
      min-width: 0;
    }

  `;
  document.head.appendChild(style);
};

// --------------- DATA ---------------
const PHONE = "(602) 763-7600";
const PHONE_HREF = "tel:+16027637600";
const EMAIL = "allstarrefrigeration@gmail.com";
const EMAIL_HREF = "mailto:allstarrefrigeration@gmail.com";

/** Lead magnet — promoted sitewide */
const SERVICE_CALL_PRICE = "$89";
const SERVICE_CALL_SHORT = `${SERVICE_CALL_PRICE} service call`;

/** Service van next to home hero headline — white Sprinter; change filename to swap. */
const HERO_VAN_FILENAME = "image4.jpeg";
const HERO_VAN_PHOTO = `/photos/${HERO_VAN_FILENAME}`;

/** Emergency AC Repair service page — van + on-the-job (not shown on home gallery). */
const REPAIR_SERVICE_ID = "emergency-ac-repair";
const REPAIR_PAGE_VAN_PHOTO = "/photos/image3.jpeg";
const REPAIR_PAGE_WORK_PHOTO = "/photos/image10.jpeg";
const REPAIR_PAGE_SIDE_PHOTO = "/photos/image13.jpeg";
/** Second row beside “When to Call Us” — also on home strip (`image8`). */
const REPAIR_PAGE_WHEN_TO_CALL_PHOTO = "/photos/image8.jpeg";
/** Electrical / control shot stays off the home gallery. Tech shot (image10) is on the home strip + repair page; van (image3) in gallery. */
const REPAIR_PAGE_GALLERY_EXCLUDE = ["image13.jpeg"];

/** AC Installation & Replacement service page — hero + supporting shots (not in home gallery). */
const AC_INSTALL_SERVICE_ID = "ac-installation";
const INSTALL_PAGE_HERO_PHOTO = "/photos/image14.jpeg";
const INSTALL_PAGE_PHOTO_CRANE = "/photos/image5.jpeg";
/** Left tile in install photo row (hero uses `image14`; this slot uses `image6`). */
const INSTALL_PAGE_PHOTO_GRID_LEFT = "/photos/image6.jpeg";
/** image15 is home gallery only — not used on install page. */
const INSTALL_PAGE_GALLERY_EXCLUDE = ["image6.jpeg", "image14.jpeg"];

/** Heating Repair & Install service page — hero photo (`image12` also in home gallery; order swapped with `image15` there only). */
const HEATING_SERVICE_ID = "heating-repair";
const HEATING_PAGE_HERO_PHOTO = "/photos/image12.jpeg";
const HEATING_PAGE_GALLERY_EXCLUDE = [];

/** Seasonal Maintenance service page — hero + sidebar (not in home gallery). */
const MAINTENANCE_SERVICE_ID = "maintenance";
const MAINTENANCE_PAGE_HERO_PHOTO = "/photos/image7.jpeg";
const MAINTENANCE_PAGE_SIDEBAR_PHOTO = "/photos/image8.jpeg";
const MAINTENANCE_PAGE_GALLERY_EXCLUDE = ["image7.jpeg"];

/** Owner photos in public/photos/ — add filenames here if you add more images. */
const OWNER_PHOTO_FILES = [
  "image0.jpeg",
  "image1.jpeg",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.jpeg",
  "image7.jpeg",
  "image8.jpeg",
  "image9.jpeg",
  "image10.jpeg",
  "image11.jpeg",
  "image12.jpeg",
  "image13.jpeg",
  "image14.jpeg",
  "image15.jpeg",
];

/** Home strip above “Our work” — explicit files + captions */
const PHOTO_STRIP = [
  {
    src: "/photos/image10.jpeg",
    title: "Professional techs",
    subtitle: `Flat ${SERVICE_CALL_PRICE} service call — book online 24/7 or call 9–5. Easy.`,
  },
  {
    src: "/photos/image1.jpeg",
    title: "Licensed, bonded & insured",
    subtitle: "Sales · Service · Installation",
  },
  {
    src: "/photos/image8.jpeg",
    title: "Full replacement or just a tune up",
    subtitle: "We'll get your AC back running at light speed.",
  },
];

const PHOTO_STRIP_FILENAMES = ["image10.jpeg", "image1.jpeg", "image8.jpeg"];

/** “Our work” tiles that use `object-fit: contain` so logos or full equipment aren’t cropped. */
const GALLERY_CONTAIN_FILENAMES = ["image0.jpeg"];

/** Excluded from home “Our work” only (files may still appear on service pages). */
const HOME_GALLERY_EXCLUDE = ["image11.jpeg", "image15.jpeg"];

/** Remaining owner photos for the gallery (no hero van, strip, or service-detail-only shots). */
const OWNER_GALLERY_PHOTOS = OWNER_PHOTO_FILES.filter(
  (f) =>
    f !== HERO_VAN_FILENAME &&
    !PHOTO_STRIP_FILENAMES.includes(f) &&
    !REPAIR_PAGE_GALLERY_EXCLUDE.includes(f) &&
    !INSTALL_PAGE_GALLERY_EXCLUDE.includes(f) &&
    !HEATING_PAGE_GALLERY_EXCLUDE.includes(f) &&
    !MAINTENANCE_PAGE_GALLERY_EXCLUDE.includes(f) &&
    !HOME_GALLERY_EXCLUDE.includes(f)
);

const SERVICES = [
  {
    id: "emergency-ac-repair",
    title: "Emergency AC Repair",
    shortDesc: "Same-day emergency service when your system goes down and the heat won't wait.",
    icon: ThermIcon,
    color: "#C41E24",
    bgColor: "#FDEAEA",
    hero: "Your AC Died. We're Already Loading the Truck.",
    heroSub: "In Phoenix, a broken AC isn't an inconvenience — it's an emergency. We treat it like one.",
    details: [
      "Same-day emergency response during business hours — often within 2 hours",
      "We diagnose the real problem, not just the symptom",
      "Upfront pricing before any work begins",
      "Common repairs completed on first visit — we stock parts",
      "24/7 availability including weekends and holidays",
      "No overtime charges or 'emergency fees'"
    ],
    scenarios: [
      { title: "Compressor failure", desc: "The most dreaded sound — silence from your outdoor unit. We carry common compressor parts and can often get you running same-day." },
      { title: "Refrigerant leak", desc: "Warm air blowing? Could be a leak. We find it, fix it, and recharge your system properly — no band-aids." },
      { title: "Electrical issues", desc: "Tripped breakers, blown capacitors, faulty contactors. These are fast fixes when you know what you're looking at. We do." },
      { title: "Frozen coils", desc: "Ice on your AC in 110° heat seems impossible, but it happens. We'll thaw it, find the cause, and make sure it doesn't come back." }
    ],
    cta: "Don't wait. Don't sweat. Call now."
  },
  {
    id: "ac-installation",
    title: "AC Installation & Replacement",
    shortDesc: "New system sized right for your home and budget — no overselling, no undersizing.",
    icon: FanIcon,
    color: "#1565A0",
    bgColor: "#E3F0FA",
    hero: "Time for a New System? Let's Do This Right.",
    heroSub: "A properly sized, properly installed system is the difference between comfort and regret. We get it right the first time.",
    details: [
      "Manual J load calculation — we size to your actual home, not a guess",
      "Top-tier brands at competitive prices",
      "Full removal and disposal of old equipment",
      "Clean, professional installation with photo documentation",
      "Full system warranty plus our workmanship guarantee",
      "Financing options available"
    ],
    scenarios: [
      { title: "System is 15+ years old", desc: "Modern systems use 30-50% less energy. The math usually works out in your favor within a few years." },
      { title: "Repair costs keep climbing", desc: "When you're spending $500+ per year on repairs, it's often cheaper to replace than to keep patching." },
      { title: "Uneven cooling", desc: "Some rooms hot, some rooms cold? Could be ductwork, could be an undersized system. We'll figure it out." },
      { title: "New construction or addition", desc: "Building out? We'll design the system from scratch to match your space perfectly." }
    ],
    cta: "Free in-home estimate. No pressure. Real answers."
  },
  {
    id: "heating-repair",
    title: "Heating Repair & Install",
    shortDesc: "Yes, Phoenix gets cold. Heat pumps, furnaces, and everything in between.",
    icon: SunIcon,
    color: "#D97706",
    bgColor: "#FEF3C7",
    hero: "Phoenix Winters Are No Joke.",
    heroSub: "When your heat pump or furnace quits on a January morning, you remember real fast that the desert gets cold too.",
    details: [
      "Heat pump repair and replacement",
      "Gas and electric furnace service",
      "Thermostat diagnostics and replacement",
      "Ductwork inspection and repair",
      "Pre-winter system checkups",
      "Same-day service available"
    ],
    scenarios: [
      { title: "Heat pump blowing cold air", desc: "Could be a reversing valve, a refrigerant issue, or a defrost problem. We'll diagnose it fast." },
      { title: "Furnace won't ignite", desc: "Igniter, flame sensor, gas valve — these are common fixes we handle every winter." },
      { title: "Strange noises", desc: "Banging, squealing, or rattling from your heater? Don't ignore it. These usually get worse." },
      { title: "High energy bills", desc: "If your heating costs spiked, something's not running efficiently. A tune-up often pays for itself." }
    ],
    cta: "Stay warm. Call All Star."
  },
  {
    id: "maintenance",
    title: "Seasonal Maintenance",
    shortDesc: "Pre-summer tune-ups that catch problems before they become emergencies.",
    icon: ChartIcon,
    color: "#059669",
    bgColor: "#D1FAE5",
    hero: `The Smartest ${SERVICE_CALL_PRICE} You'll Spend All Year.`,
    heroSub: "A spring tune-up catches the small stuff before it becomes a $2,000 problem in July. Every year we save people from breakdowns they never saw coming.",
    details: [
      "Full system inspection — electrical, mechanical, refrigerant",
      "Condenser and evaporator coil cleaning",
      "Refrigerant level check and adjustment",
      "Thermostat calibration",
      "Drain line flush and treatment",
      "Air filter replacement",
      "Written report of system condition and recommendations"
    ],
    scenarios: [
      { title: "Pre-summer tune-up", desc: "The big one. Get your AC checked in April or May before the heat hits and every tech in town is booked solid." },
      { title: "Pre-winter checkup", desc: "Make sure your heat pump or furnace is ready before the first cold snap catches you off guard." },
      { title: "New homeowner audit", desc: "Just bought a house? Let us do a full audit so you know exactly what you're working with." },
      { title: "Annual maintenance plan", desc: "Priority scheduling, discounted repairs, and peace of mind. Ask us about our maintenance memberships." }
    ],
    cta: "Schedule your tune-up before the rush."
  }
];

const REVIEWS = [
  { text: "Our AC died at 2pm on a Saturday in July. Every other company said Monday at the earliest. All Star was at our door in under two hours. My kids were back to playing in a cool house by dinner.", name: "Sarah M.", area: "Gilbert, AZ", initials: "SM" },
  { text: "After getting quoted $4,500 from a big chain for a 'full system replacement,' I called All Star for a second opinion. Turns out it was a $180 fix. Honest people are hard to find — these guys are the real deal.", name: "Robert J.", area: "Chandler, AZ", initials: "RJ" },
  { text: "Just moved here from Ohio. Had no idea who to call when our AC started making a horrible noise. Found All Star on Nextdoor and I'm so glad I did. Felt like calling a friend, not a contractor.", name: "Diana T.", area: "Mesa, AZ", initials: "DT" },
  { text: "They talked me OUT of replacing my unit. Said it had another 5 years easy with a $200 repair. What company does that? All Star does. Customer for life.", name: "Marcus L.", area: "Scottsdale, AZ", initials: "ML" },
  { text: "I'm a single mom and the AC going out with two toddlers is genuinely scary in this heat. All Star came same day, charged me fair, and even showed me how to check my filter myself. Above and beyond.", name: "Jessica R.", area: "Tempe, AZ", initials: "JR" },
  { text: "Had three companies come look at a noise in my system. Two said I needed a new unit. All Star found a loose fan blade and fixed it in 20 minutes. Integrity matters.", name: "Tom K.", area: "Phoenix, AZ", initials: "TK" }
];

const SERVICE_AREAS = ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Gilbert", "Chandler", "Glendale", "Peoria", "Surprise", "Avondale", "Goodyear", "Buckeye"];

const FAQS = [
  { q: `What’s included in the ${SERVICE_CALL_PRICE} service call?`, a: `It covers a trip to your home, a full diagnostic of your system, and a clear, written quote before any repair work. You’re not paying for a vague “trip charge” — you’re paying for answers and transparency. If you approve repairs, we’ll apply the service call toward the work when it makes sense — we’ll explain that on site.` },
  { q: "How fast can you get here?", a: "For emergencies, we aim for same-day service — often within 2 hours depending on our current schedule. We prioritize by severity, so if your house is 90°+ with kids or elderly family members, you jump to the front of the line." },
  { q: "Do you charge extra for weekends or after-hours?", a: "No. We don't believe in punishing people for having an emergency at an inconvenient time. Our rates are our rates — period." },
  { q: "How much does a typical repair cost?", a: "It depends on what's wrong and the type of system you have, but we believe you should have a ballpark before you ever call. Most common repairs (capacitors, contactors, minor electrical) land between $180–$450, with larger repairs (motors, coils, refrigerant issues) typically between $450–$1,200. We always give you a written, line‑item estimate before we start, so there are no surprises." },
  { q: "Should I repair or replace my AC?", a: "General rule: if your system is under 10 years old and the repair is under $1,000, repair it. Over 15 years with a major failure? Probably time to replace. We'll always give you our honest recommendation — even if it means less money for us." },
  { q: "Do you offer financing?", a: "Yes. We work with financing partners to offer affordable monthly payment options for new system installations. Ask us for details." },
  { q: "Are you licensed and insured?", a: "Absolutely. Full ROC license, full liability insurance, and all techs are background-checked and certified. We're happy to provide documentation." }
];

// --------------- SHARED COMPONENTS ---------------

const EmergencyBar = ({ navigate }) => (
  <div style={{ background: 'var(--flame)', color: 'white', padding: '10px 18px', textAlign: 'center', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.02em', position: 'relative', overflow: 'hidden', zIndex: 100, fontFamily: "'DM Sans', sans-serif" }}>
    <div style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', animation: 'heatPulse 3s ease-in-out infinite' }} />
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px 14px' }}>
      <button
        type="button"
        onClick={() => navigate('contact', { scrollToForm: true })}
        aria-label="Book service — go to request form"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #FBBF24 0%, #D97706 100%)',
          color: '#0f172a',
          padding: '5px 14px',
          borderRadius: 999,
          fontSize: '0.88rem',
          fontWeight: 800,
          letterSpacing: '0.04em',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {SERVICE_CALL_SHORT.toUpperCase()}
      </button>
      <span style={{ opacity: 0.85 }}>🌡️ Phoenix Heat Alert</span>
      <span>
        AC down? 9–5 calls · 24/7 online booking.{' '}
        <a href={PHONE_HREF} style={{ color: 'white', textDecoration: 'none', borderBottom: '2px solid rgba(255,255,255,0.5)', fontWeight: 800 }}>{PHONE}</a>
      </span>
    </div>
  </div>
);

const Header = ({ currentPage, navigate, contactNavTarget }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services", dropdown: true },
    { label: "About", page: "about" },
    { label: "Reviews", page: "reviews" },
    { label: "Contact", page: "contact" },
    { label: "FAQ", page: "contact", scrollToFaq: true },
  ];

  const isActive = (item) => {
    if (item.page === "services" && currentPage.startsWith("service-")) return true;
    if (item.scrollToFaq) return currentPage === "contact" && contactNavTarget === "faq";
    if (item.page === "contact") return currentPage === "contact" && contactNavTarget !== "faq";
    return currentPage === item.page;
  };

  return (
    <header style={{
      background: 'white',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 90,
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.04)',
      transition: 'box-shadow 0.3s',
      fontFamily: "'DM Sans', sans-serif",
      height: 72,
    }}>
      <div onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
        <LogoImg height={52} />
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
        {navItems.map(item => (
          <div key={item.label} style={{ position: 'relative' }}
            onMouseEnter={() => item.dropdown && setServicesOpen(true)}
            onMouseLeave={() => item.dropdown && setServicesOpen(false)}
          >
            <button
              onClick={() => {
                if (item.scrollToFaq) navigate('contact', { scrollToFaq: true });
                else navigate(item.page);
                setServicesOpen(false);
              }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px 16px', borderRadius: 8, fontSize: '0.92rem', fontWeight: 500,
                color: isActive(item) ? 'var(--cool)' : 'var(--charcoal)',
                fontFamily: "'DM Sans', sans-serif",
                display: 'flex', alignItems: 'center', gap: 4,
                transition: 'color 0.2s',
              }}
            >
              {item.label}
              {item.dropdown && <ChevronDown />}
            </button>
            {item.dropdown && servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, background: 'white',
                borderRadius: 12, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', padding: '8px 0',
                minWidth: 260, zIndex: 100, border: '1px solid rgba(0,0,0,0.06)'
              }}>
                {SERVICES.map(svc => (
                  <button key={svc.id} onClick={() => { navigate(`service-${svc.id}`); setServicesOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', width: '100%',
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                      fontFamily: "'DM Sans', sans-serif", transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f7f7f7'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: svc.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: svc.color, flexShrink: 0 }}>
                      <svc.icon />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--midnight)' }}>{svc.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#718096' }}>{svc.shortDesc.slice(0, 50)}...</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href={PHONE_HREF} style={{
          display: 'flex', alignItems: 'center', gap: 10, background: 'var(--flame)', color: 'white',
          padding: '10px 22px', borderRadius: 50, textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
          transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(196,30,36,0.3)', fontFamily: "'DM Sans', sans-serif"
        }}>
          <span style={{ animation: 'phoneRing 2s ease-in-out infinite', display: 'inline-flex' }}><PhoneIcon /></span>
          <span className="phone-label">{PHONE}</span>
        </a>
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }} className="mobile-menu-btn">
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, bottom: 0, background: 'white', zIndex: 89,
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4,
          overflowY: 'auto'
        }}>
          {navItems.map(item => (
            <div key={item.label}>
              <button onClick={() => {
                if (item.scrollToFaq) navigate('contact', { scrollToFaq: true });
                else navigate(item.page);
                setMobileOpen(false);
              }} style={{
                display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
                padding: '16px 0', fontSize: '1.15rem', fontWeight: 600, color: 'var(--midnight)',
                borderBottom: '1px solid #eee', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
              }}>{item.label}</button>
              {item.dropdown && (
                <div style={{ paddingLeft: 16 }}>
                  {SERVICES.map(svc => (
                    <button key={svc.id} onClick={() => { navigate(`service-${svc.id}`); setMobileOpen(false); }} style={{
                      display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      padding: '12px 0', fontSize: '0.95rem', fontWeight: 500, color: '#4A5568',
                      borderBottom: '1px solid #f5f5f5', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
                    }}>{svc.title}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .phone-label { display: none; }
        }
      `}</style>
    </header>
  );
};

const Footer = ({ navigate }) => (
  <footer style={{ background: 'var(--midnight)', padding: '60px 40px 30px', fontFamily: "'DM Sans', sans-serif" }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
      <div>
      <div style={{ fontFamily: "'Archivo Black', sans-serif", color: 'white', fontSize: '1.1rem', marginBottom: 12 }}>
          <LogoImg height={42} dark={true} />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
          Locally owned AC repair and installation serving the Phoenix metro area. Your neighbors, not a corporation.
        </p>
      </div>
      <div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
        {SERVICES.map(svc => (
          <div key={svc.id} style={{ marginBottom: 10 }}>
            <button onClick={() => navigate(`service-${svc.id}`)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', cursor: 'pointer', padding: 0, fontFamily: "'DM Sans', sans-serif" }}>{svc.title}</button>
          </div>
        ))}
      </div>
      <div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
        {[{ label: 'About Us', page: 'about' }, { label: 'Reviews', page: 'reviews' }, { label: 'Contact', page: 'contact' }, { label: 'FAQ', page: 'contact', scrollToFaq: true }].map(item => (
          <div key={item.label} style={{ marginBottom: 10 }}>
            <button onClick={() => (item.scrollToFaq ? navigate('contact', { scrollToFaq: true }) : navigate(item.page))} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', cursor: 'pointer', padding: 0, fontFamily: "'DM Sans', sans-serif" }}>{item.label}</button>
          </div>
        ))}
      </div>
      <div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 10 }}>
          <PhoneIcon /> <a href={PHONE_HREF} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{PHONE}</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 10 }}>
          <MailIcon /> <a href={EMAIL_HREF} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{EMAIL}</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
          <MapPinIcon /> 16227 N 28th Pl, Phoenix, AZ 85032
        </div>
      </div>
    </div>
    <div style={{ maxWidth: 1100, margin: '30px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
      <span>© 2026 All Star Refrigeration. All rights reserved.</span>
      <div style={{ display: 'flex', gap: 20 }}>
        <span>ROC Licensed</span><span>Fully Insured</span><span>Phoenix, AZ</span>
      </div>
    </div>
  </footer>
);

const SectionTag = ({ children, light }) => (
  <div style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: light ? 'var(--gold)' : 'var(--cool)', marginBottom: 14 }}>{children}</div>
);

const CTABanner = ({ navigate }) => (
  <section style={{ padding: '80px 40px', background: 'var(--cool-deep)', textAlign: 'center', position: 'relative', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(214,239,248,0.08) 0%, transparent 60%)' }} />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto' }}>
      <button
        type="button"
        onClick={() => navigate('contact', { scrollToForm: true })}
        aria-label="Book service — go to request form"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(180deg, #FBBF24 0%, #D97706 100%)',
          color: '#0f172a',
          padding: '8px 18px',
          borderRadius: 999,
          fontWeight: 800,
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          marginBottom: 16,
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {SERVICE_CALL_SHORT.toUpperCase()}
      </button>
      <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'white', lineHeight: 1.1, marginBottom: 14 }}>Don't Sweat It — Start With {SERVICE_CALL_PRICE}.</h3>
      <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', marginBottom: 36, lineHeight: 1.6 }}>One call between 9–5 (or book online 24/7). A real tech, a clear diagnosis, and pricing you’ll see in writing — starting with our flat {SERVICE_CALL_SHORT}.</p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={PHONE_HREF} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--flame)', color: 'white',
          padding: '18px 40px', borderRadius: 60, textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem',
          boxShadow: '0 8px 30px rgba(196,30,36,0.4)', transition: 'all 0.3s', fontFamily: "'DM Sans', sans-serif"
        }}>
          <PhoneIcon /> {PHONE}
        </a>
        <button onClick={() => navigate('contact', { scrollToForm: true })} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', color: 'rgba(255,255,255,0.7)',
          padding: '18px 28px', borderRadius: 60, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
          fontWeight: 600, fontSize: '1rem', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s'
        }}>
          <CalendarIcon /> Schedule Online
        </button>
      </div>
      <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.3)', fontSize: '0.88rem' }}>Phones answered 9–5 • Online booking 24/7</p>
    </div>
  </section>
);

// --------------- PAGES ---------------

// ========== HOME ==========
const HomePage = ({ navigate }) => (
  <div>
    {/* Hero — copy + real service van */}
    <section style={{ position: 'relative', minHeight: 'min(92vh, 900px)', display: 'flex', alignItems: 'center', background: 'var(--midnight)', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 80%, rgba(196,30,36,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(21,101,160,0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.8) 100%)', zIndex: 1 }} />
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 80px) clamp(24px, 4vw, 48px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, 1fr)',
          gap: 'clamp(36px, 5vw, 56px)',
          alignItems: 'start',
        }}
        className="hero-home-grid"
      >
        <div style={{ minWidth: 0, paddingTop: 2 }}>
          <div className="anim-fadeInUp anim-d2" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,30,36,0.15)', border: '1px solid rgba(196,30,36,0.3)', color: '#E88A8D', padding: '8px 18px', borderRadius: 30, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, background: 'var(--flame)', borderRadius: '50%', animation: 'dotPulse 1.5s ease-in-out infinite' }} />
            It's already 82° inside. It's going to be 110° today.
          </div>
          <h2 className="anim-fadeInUp anim-d3" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.75rem, 3.6vw, 2.65rem)', color: 'rgba(248,250,252,0.96)', lineHeight: 1.12, marginBottom: 22 }}>
            Your AC Went Down.<br />We're Already <span style={{ color: '#E0F2FE' }}>On Our Way.</span>
          </h2>
          <p className="anim-fadeInUp anim-d4" style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 32, maxWidth: 560 }}>
            You woke up sweating. The dog's panting. The thermostat reads a number that makes your stomach drop. You don't need a sales pitch — <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>you need someone who picks up the phone and shows up.</span>
          </p>
          <div className="anim-fadeInUp anim-d5" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--flame)', color: 'white', padding: '16px 32px', borderRadius: 60, textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 30px rgba(196,30,36,0.4)', transition: 'all 0.3s', fontFamily: "'DM Sans', sans-serif" }}>
              <PhoneIcon /> Call — {SERVICE_CALL_SHORT}
            </a>
            <button onClick={() => navigate('contact', { scrollToForm: true })} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', background: 'none', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 24px', borderRadius: 60, cursor: 'pointer', fontWeight: 600, fontSize: '1rem', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s' }}>
              Schedule for later →
            </button>
          </div>
          <div className="anim-fadeInUp anim-d7" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 32, rowGap: 12, marginTop: 44, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', fontWeight: 500 }}>
              <span style={{ color: 'var(--gold)' }}><ClockIcon /></span>
              <span><strong style={{ color: 'rgba(255,255,255,0.85)' }}>Same-day</strong> service</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'nowrap', color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', fontWeight: 500 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                <span style={{ color: 'var(--gold)' }}><ShieldIcon /></span>
                <span><strong style={{ color: 'rgba(255,255,255,0.85)' }}>Licensed</strong> & insured</span>
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }} aria-hidden>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                <span style={{ color: 'var(--gold)' }}><StarIcon /></span>
                <span><strong style={{ color: 'rgba(255,255,255,0.85)' }}>5-star</strong> rated</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="hero-van-column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            paddingTop: 2,
            minHeight: 0,
            gap: 16,
          }}
        >
          <div style={{ width: '100%', maxWidth: 540, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              className="hero-van-photo"
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: 22,
                overflow: 'hidden',
                boxShadow: '0 22px 56px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.08) inset',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(13,27,42,0.35)',
              }}
            >
              <img
                src={HERO_VAN_PHOTO}
                alt="All Star Refrigeration service van — Phoenix metro"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(180deg, transparent 50%, rgba(13,27,42,0.4) 100%)',
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => navigate('contact', { scrollToForm: true })}
              className="anim-fadeInUp anim-d2"
              aria-label="Book a service call — open scheduling form"
              style={{
                padding: '16px 20px',
                borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(212,165,57,0.18) 0%, rgba(196,30,36,0.14) 55%, rgba(21,101,160,0.1) 100%)',
                border: '1px solid rgba(212,165,57,0.45)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                width: '100%',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'inherit',
              }}
            >
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.65rem, 3.2vw, 2.35rem)', color: 'var(--gold)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                {SERVICE_CALL_PRICE}{' '}
                <span style={{ color: 'rgba(248,250,252,0.98)', fontSize: '0.52em', fontWeight: 700, fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.02em', verticalAlign: 'middle' }}>service call</span>
              </div>
              <p style={{ margin: '10px 0 0', fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, fontWeight: 500 }}>
                Flat rate to get a licensed tech on site — clear diagnosis, upfront quote before we start work.{' '}
                <strong style={{ color: 'rgba(255,255,255,0.95)' }}>That’s how we earn your trust.</strong>
              </p>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 901px) {
          .hero-home-grid {
            align-items: start;
          }
        }
        @media (max-width: 900px) {
          .hero-home-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .hero-van-column {
            justify-content: center !important;
            align-items: center !important;
            padding-top: 0 !important;
          }
          .hero-van-photo {
            max-width: 100% !important;
          }
          .hero-van-photo img {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>

    {/* Empathy Section */}
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
        <div>
          <SectionTag>We get it</SectionTag>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--midnight)', lineHeight: 1.1, marginBottom: 22 }}>We've Lived This <span style={{ color: 'var(--flame)' }}>Nightmare</span> Too.</h3>
          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4A5568' }}>
            <p style={{ marginBottom: 14 }}>We're not a call center in another state. We're your neighbors. We live in this heat. We know what it feels like when the AC quits on a Friday in July and every big company tells you <strong style={{ color: 'var(--midnight)' }}>"earliest we can get there is Tuesday."</strong></p>
            <p>That's why All Star exists. Not to be the biggest company — but to be the one that actually <strong style={{ color: 'var(--midnight)' }}>shows up when it matters.</strong></p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { icon: <ThermIcon />, iconBg: '#FDEAEA', iconColor: 'var(--flame)', title: "The 3AM Wake-Up", desc: "House is 86°. Kids can't sleep. You need someone now, not a voicemail." },
            { icon: <SnowflakeIcon />, iconBg: '#E3F0FA', iconColor: 'var(--cool)', title: "The Weekend Emergency", desc: "It's Saturday, 112° outside. Big companies charge double. We don't." },
            { icon: <HeartIcon />, iconBg: '#FEF3C7', iconColor: '#D97706', title: "The New Homeowner", desc: "Just moved to Phoenix. Old unit looks sketchy. You need honest answers, not an upsell." }
          ].map((s, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 16, padding: '24px 26px', display: 'flex', gap: 18, alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.iconColor, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.98rem', marginBottom: 3 }}>{s.title}</div>
                <div style={{ fontSize: '0.88rem', color: '#718096', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Photo strip — images from public/photos/ (see PHOTO_STRIP + public/photos/README.md) */}
    <section style={{ padding: '0 clamp(24px, 4vw, 80px) 70px', background: 'var(--warm-white)', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="photo-strip">
          {PHOTO_STRIP.map((photo, i) => (
            <div
              key={i}
              className="photo-strip__item"
              style={{ backgroundImage: `url('${photo.src}')` }}
              role="img"
              aria-label={`${photo.title} ${photo.subtitle}`}
            >
              <div className="photo-strip__label">
                <span>{photo.title}</span>
                <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>{photo.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Owner photo gallery */}
    {OWNER_GALLERY_PHOTOS.length > 0 && (
      <section style={{ padding: '0 clamp(24px, 4vw, 80px) clamp(60px, 8vw, 90px)', background: 'var(--warm-white)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <SectionTag>Our work</SectionTag>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.1rem)', color: 'var(--midnight)', lineHeight: 1.15, marginBottom: 8 }}>
              On the job in Phoenix
            </h3>
            <p style={{ fontSize: '0.98rem', color: '#718096', maxWidth: 520, margin: '0 auto' }}>
              Real jobs, real equipment, real Valley heat — straight from the field.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 14,
            }}
          >
            {OWNER_GALLERY_PHOTOS.map((file, i) => {
              const useContain = GALLERY_CONTAIN_FILENAMES.includes(file);
              const alt =
                file === "image0.jpeg"
                  ? "Better Business Bureau Accredited — All Star Refrigeration"
                  : file === "image12.jpeg"
                    ? "Heating and HVAC service — All Star Refrigeration"
                    : `All Star Refrigeration work photo ${i + 1}`;
              return (
                <img
                  key={file}
                  src={`/photos/${file}`}
                  alt={alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: useContain ? "contain" : "cover",
                    objectPosition: "center",
                    background: useContain ? "var(--warm-white)" : undefined,
                    padding: useContain ? 8 : 0,
                    boxSizing: "border-box",
                    borderRadius: 16,
                    boxShadow: "0 4px 18px rgba(15,23,42,0.12)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    )}

    {/* Why Choose All Star */}
    <section style={{ padding: 'clamp(60px, 8vw, 90px) clamp(24px, 4vw, 80px)', background: 'white', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionTag>Why choose us</SectionTag>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--midnight)', lineHeight: 1.1, marginBottom: 10 }}>
            The HVAC Company You Call First.
          </h3>
          <p style={{ fontSize: '1.02rem', color: '#4A5568', maxWidth: 620, margin: '0 auto' }}>
            Inspired by the best in the Valley, built for Phoenix families and small businesses who want straight answers, fast service, and work that actually lasts.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
          {[
            {
              icon: <StarIcon />,
              title: "100% Satisfaction Focused",
              desc: "From the first call to the final walkthrough, we do the job the way we’d want it done in our own homes."
            },
            {
              icon: <ShieldIcon />,
              title: "Licensed, Insured, Background-Checked",
              desc: "ROC licensed, fully insured, and techs you’re comfortable having in your home — day or night."
            },
            {
              icon: <ThumbsUpIcon />,
              title: "Honest, Straightforward Pricing",
              desc: "We diagnose, explain, and quote before we start. No surprise invoices, no mysterious line items."
            },
            {
              icon: <UsersIcon />,
              title: "Local, Phoenix-Rooted Team",
              desc: "We live here, we work here, and our reputation with your neighbors matters more than billboards."
            }
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--warm-white)', borderRadius: 18, padding: 26, border: '1px solid rgba(0,0,0,0.04)', display: 'flex', gap: 14 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cool)', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.96rem', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: '0.9rem', color: '#718096', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--midnight)', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <SectionTag light>What we do</SectionTag>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'white', lineHeight: 1.1 }}>Heating, Cooling & Refrigeration <span style={{ color: 'var(--ice)' }}>Done Right.</span></h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
          {SERVICES.map(svc => (
            <button key={svc.id} onClick={() => navigate(`service-${svc.id}`)}
              style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20,
                padding: '32px 28px', textAlign: 'left', cursor: 'pointer', transition: 'all 0.4s', position: 'relative', overflow: 'hidden',
                fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 15, background: 'rgba(21,101,160,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ice)', marginBottom: 18 }}>
                <svc.icon />
              </div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.08rem', color: 'white', marginBottom: 8 }}>{svc.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>{svc.shortDesc}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ice)', fontSize: '0.88rem', fontWeight: 600 }}>
                Learn more <ArrowRightIcon />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section style={{ padding: 'clamp(60px, 8vw, 90px) clamp(24px, 4vw, 80px)', background: 'white', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <SectionTag>How it works</SectionTag>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--midnight)', lineHeight: 1.1, marginBottom: 10 }}>From Panic to Cool Air in Three Steps.</h3>
          <p style={{ fontSize: '1.02rem', color: '#4A5568', maxWidth: 560, margin: '0 auto' }}>We keep the process simple so you can focus on your family, your tenants, or your business — not your AC.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {[
            {
              icon: <PhoneIcon />,
              title: "1. Call or Tap Schedule",
              desc: "A real person in Phoenix picks up the phone. We ask a few quick questions and slot you for the fastest available arrival."
            },
            {
              icon: <WrenchIcon />,
              title: "2. Diagnose & Explain",
              desc: "Your tech shows up on time, inspects the system, and walks you through what’s wrong — with clear options and upfront pricing."
            },
            {
              icon: <CheckIcon />,
              title: "3. Fix It the Right Way",
              desc: "Most repairs are handled on the first visit. We document our work, answer questions, and leave your space cleaner than we found it."
            }
          ].map((step, i) => (
            <div key={i} style={{ background: 'var(--warm-white)', borderRadius: 18, padding: 26, border: '1px solid rgba(0,0,0,0.04)', display: 'flex', gap: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cool)', flexShrink: 0 }}>
                {step.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.98rem', marginBottom: 4 }}>{step.title}</div>
                <div style={{ fontSize: '0.9rem', color: '#718096', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Transparent Pricing */}
    <section style={{ padding: 'clamp(50px, 7vw, 80px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1050, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 40 }}>
        <div>
          <SectionTag>No games, just numbers</SectionTag>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', color: 'var(--midnight)', lineHeight: 1.1, marginBottom: 18 }}>
            Transparent Pricing You Can Actually See.
          </h3>
          <button
            type="button"
            onClick={() => navigate('contact', { scrollToForm: true })}
            aria-label="Request service — open scheduling form"
            style={{
              fontSize: '1.05rem',
              color: '#4A5568',
              lineHeight: 1.7,
              marginBottom: 14,
              padding: '14px 18px',
              background: 'white',
              borderRadius: 14,
              border: '2px solid rgba(212,165,57,0.45)',
              boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
              width: '100%',
              textAlign: 'left',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <strong style={{ color: 'var(--midnight)', fontSize: '1.15em' }}>{SERVICE_CALL_SHORT}</strong> is our standard way to get rolling: a tech on site, full diagnostic, and a written quote before optional repairs — <strong>no “free estimate” games that turn into pressure.</strong>
          </button>
          <p style={{ fontSize: '1.02rem', color: '#4A5568', lineHeight: 1.7, marginBottom: 16 }}>
            Tired of “call for pricing” and mystery invoices? So are we. You get clear numbers up front — before anyone turns a wrench.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              "Straightforward, written estimates before work begins.",
              "Line-by-line invoices so you know exactly what you paid for.",
              "No surprise “shop fees” or hidden weekend/after-hours add-ons.",
              "We’ll tell you when a repair isn’t worth it and replacement makes more sense."
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.96rem', color: '#4A5568' }}>
                <span style={{ color: 'var(--cool)', marginTop: 2 }}><CheckIcon /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.86rem', color: '#A0AEC0', marginTop: 16 }}>
            Exact pricing depends on your system and home. These ranges are here to give you an honest starting point, not trap you into a bait-and-switch.
          </p>
        </div>
        <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 30px rgba(15,23,42,0.04)' }}>
          <button
            type="button"
            onClick={() => navigate('contact', { scrollToForm: true })}
            aria-label="Book a service call — open scheduling form"
            style={{
              textAlign: 'center',
              padding: '18px 16px',
              marginBottom: 18,
              borderRadius: 16,
              background: 'linear-gradient(145deg, rgba(212,165,57,0.15) 0%, rgba(196,30,36,0.08) 100%)',
              border: '1px solid rgba(212,165,57,0.35)',
              width: '100%',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--cool)', textTransform: 'uppercase', marginBottom: 6 }}>Lead with clarity</div>
            <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--midnight)', lineHeight: 1 }}>
              {SERVICE_CALL_PRICE}
            </div>
            <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.95rem', marginTop: 4 }}>service call</div>
            <div style={{ fontSize: '0.82rem', color: '#718096', marginTop: 8, lineHeight: 1.45 }}>Diagnostic + written quote before repairs</div>
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.98rem' }}>More typical ranges</div>
            <div style={{ fontSize: '0.78rem', color: '#A0AEC0' }}>Most homes ~2,000 sq ft</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: "Same-day / priority visit (if quoted)", range: "up to $129" },
              { label: "Common repairs (capacitors, contactors, minor electrical)", range: "$180 – $450" },
              { label: "Larger repairs (motors, coils, refrigerant issues)", range: "$450 – $1,200" },
              { label: "Pre-season tune‑up", range: "$89 – $149" },
              { label: "Typical full system replacement*", range: "$8,000 – $15,000" }
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '8px 0', borderBottom: i === 4 ? 'none' : '1px solid #EDF2F7', fontSize: '0.92rem' }}>
                <span style={{ color: '#4A5568' }}>{row.label}</span>
                <span style={{ fontWeight: 700, color: 'var(--midnight)', whiteSpace: 'nowrap' }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: 10 }}>
            *Every home is different. We size and quote systems based on your actual layout, insulation, and comfort goals — never “one-size-fits-all” pricing.
          </p>
        </div>
      </div>
    </section>

    {/* Reviews Preview */}
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'white', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionTag>From your neighbors</SectionTag>
          <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: 'var(--midnight)', lineHeight: 1.1 }}>Phoenix Families Trust All Star</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          {REVIEWS.slice(0, 3).map((r, i) => (
            <div key={i} style={{ background: 'var(--warm-white)', borderRadius: 20, padding: 30, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#4A5568', fontStyle: 'italic', marginBottom: 18 }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--cool)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>{r.initials}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.9rem' }}>{r.name}</div>
                  <div style={{ color: '#718096', fontSize: '0.8rem' }}>{r.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <button onClick={() => navigate('reviews')} style={{ background: 'none', border: '2px solid var(--cool)', color: 'var(--cool)', padding: '12px 28px', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--cool)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--cool)'; }}
          >Read More Reviews</button>
        </div>
      </div>
    </section>

    <CTABanner navigate={navigate} />
  </div>
);

// ========== SERVICES INDEX ==========
const ServicesPage = ({ navigate }) => (
  <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionTag>Our services</SectionTag>
        <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--midnight)', lineHeight: 1.08, marginBottom: 16 }}>Everything Your Home or Business Needs to Stay Comfortable.</h2>
        <p style={{ fontSize: '1.1rem', color: '#4A5568', lineHeight: 1.7, maxWidth: 650, marginBottom: 50 }}>From emergency repairs to full system installations, we handle it all — for single-family homes, rentals, and small businesses. Every job gets the same thing: a real person, honest pricing, and work done right the first time.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {SERVICES.map(svc => (
            <button key={svc.id} onClick={() => navigate(`service-${svc.id}`)}
              style={{
                display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 24, alignItems: 'center',
                background: 'white', borderRadius: 20, padding: '32px 36px', border: '1px solid rgba(0,0,0,0.04)',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s', fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 64, height: 64, borderRadius: 18, background: svc.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: svc.color }}>
                <svc.icon />
              </div>
              <div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.15rem', color: 'var(--midnight)', marginBottom: 6 }}>{svc.title}</div>
                <div style={{ color: '#718096', fontSize: '0.95rem', lineHeight: 1.55 }}>{svc.shortDesc}</div>
              </div>
              <div style={{ color: 'var(--cool)', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                View details <ArrowRightIcon />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
    <CTABanner navigate={navigate} />
  </div>
);

// ========== SERVICE DETAIL ==========
const ServiceDetailPage = ({ serviceId, navigate }) => {
  const svc = SERVICES.find(s => s.id === serviceId);
  if (!svc) return <div style={{ padding: 80, textAlign: 'center', fontFamily: "'DM Sans', sans-serif" }}>Service not found. <button onClick={() => navigate('services')}>Back to services</button></div>;

  const isRepairPage = serviceId === REPAIR_SERVICE_ID;
  const isInstallPage = serviceId === AC_INSTALL_SERVICE_ID;
  const isHeatingPage = serviceId === HEATING_SERVICE_ID;
  const isMaintenancePage = serviceId === MAINTENANCE_SERVICE_ID;
  const hasServiceHeroPhoto =
    isRepairPage || isInstallPage || isHeatingPage || isMaintenancePage;

  const serviceHeroInner = (
    <>
      <button onClick={() => navigate('services')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', cursor: 'pointer', marginBottom: 10, fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 6 }}>
        ← All Services
      </button>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: `${svc.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: svc.bgColor, marginBottom: 14 }}>
        <svc.icon />
      </div>
      <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.5rem, 3.8vw, 2.35rem)', color: 'white', lineHeight: 1.12, marginBottom: 10 }}>{svc.hero}</h1>
      <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.5, maxWidth: 520 }}>{svc.heroSub}</p>
      <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--flame)', color: 'white', padding: '11px 20px', borderRadius: 60, textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 6px 25px rgba(196,30,36,0.35)', fontFamily: "'DM Sans', sans-serif" }}>
          <PhoneIcon /> Call — {SERVICE_CALL_SHORT}
        </a>
        <button onClick={() => navigate('contact', { scrollToForm: true })} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', color: 'rgba(255,255,255,0.7)', padding: '11px 18px', borderRadius: 60, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontWeight: 600, fontSize: '0.92rem', fontFamily: "'DM Sans', sans-serif" }}>
          Schedule Online
        </button>
      </div>
    </>
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Hero — compact padding + type on all service detail pages */}
      <section className="service-detail-hero-section" style={{ background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 80% 20%, ${svc.color}15 0%, transparent 50%)` }} />
        <div style={{ maxWidth: hasServiceHeroPhoto ? 1100 : 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {isRepairPage ? (
            <div className="service-detail-hero-grid">
              <div style={{ minWidth: 0 }}>{serviceHeroInner}</div>
              <div className="service-detail-van-photo">
                <img src={REPAIR_PAGE_VAN_PHOTO} alt="All Star Refrigeration service van — on the way to your home" />
              </div>
            </div>
          ) : isInstallPage ? (
            <div className="service-detail-hero-grid">
              <div style={{ minWidth: 0 }}>{serviceHeroInner}</div>
              <div className="service-detail-van-photo">
                <img src={INSTALL_PAGE_HERO_PHOTO} alt="New AC system installation — equipment sized and installed for your home" />
              </div>
            </div>
          ) : isHeatingPage ? (
            <div className="service-detail-hero-grid">
              <div style={{ minWidth: 0 }}>{serviceHeroInner}</div>
              <div className="service-detail-van-photo">
                <img src={HEATING_PAGE_HERO_PHOTO} alt="Heating service — heat pumps, furnaces, and winter comfort in Phoenix" />
              </div>
            </div>
          ) : isMaintenancePage ? (
            <div className="service-detail-hero-grid">
              <div style={{ minWidth: 0 }}>{serviceHeroInner}</div>
              <div className="service-detail-van-photo">
                <img src={MAINTENANCE_PAGE_HERO_PHOTO} alt="Seasonal HVAC maintenance — tune-ups and system care in Phoenix" />
              </div>
            </div>
          ) : (
            <>{serviceHeroInner}</>
          )}
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: isRepairPage || isInstallPage || isHeatingPage || isMaintenancePage ? 'clamp(36px, 5vw, 64px) clamp(24px, 4vw, 80px)' : 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)' }}>
        {isRepairPage ? (
          <div className="repair-included-section repair-included-stack">
            <div style={{ minWidth: 0, textAlign: 'left' }}>
              <SectionTag>What's included</SectionTag>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 16 }}>What You Get</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {svc.details.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--cool)', marginTop: 2, flexShrink: 0 }}><CheckIcon /></div>
                    <span style={{ fontSize: '0.94rem', color: '#4A5568', lineHeight: 1.45 }}>{d}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <SectionTag>Common scenarios</SectionTag>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 14 }}>When to Call Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {svc.scenarios.map((s, i) => (
                    <div key={i} style={{ background: 'white', borderRadius: 12, padding: '14px 16px', border: '1px solid rgba(0,0,0, 0.04)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: 3 }}>{s.title}</div>
                      <div style={{ fontSize: '0.86rem', color: '#718096', lineHeight: 1.45 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="repair-photos-stack" aria-label="Emergency repair and installation photos">
              <div className="repair-photo-tile repair-photo-tile--pair">
                <img src={REPAIR_PAGE_WORK_PHOTO} alt="All Star technician performing HVAC repair and installation work" />
              </div>
              <div className="repair-photo-tile repair-photo-tile--pair">
                <img src={REPAIR_PAGE_SIDE_PHOTO} alt="All Star HVAC electrical and control work on location" />
              </div>
              <div className="repair-photo-tile repair-photo-tile--pair">
                <img src={REPAIR_PAGE_WHEN_TO_CALL_PHOTO} alt="HVAC service and equipment — same quality work you see on every All Star job" />
              </div>
            </aside>
          </div>
        ) : isInstallPage ? (
          <div className="repair-included-section repair-included-paired-rows install-pair-rows">
            <div className="repair-left-what" style={{ minWidth: 0, textAlign: 'left' }}>
              <SectionTag>What's included</SectionTag>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 16 }}>What You Get</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {svc.details.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--cool)', marginTop: 2, flexShrink: 0 }}><CheckIcon /></div>
                    <span style={{ fontSize: '0.94rem', color: '#4A5568', lineHeight: 1.45 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="repair-right-p1 repair-pair-right" aria-label="Installation — equipment on site">
              <div className="install-pair-photo-grid__item">
                <img src={INSTALL_PAGE_PHOTO_GRID_LEFT} alt="HVAC replacement and new equipment on site" />
              </div>
            </aside>
            <div className="repair-left-when" style={{ minWidth: 0, textAlign: 'left' }}>
              <SectionTag>Common scenarios</SectionTag>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 14 }}>When to Call Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {svc.scenarios.map((s, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: 12, padding: '14px 16px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: '0.86rem', color: '#718096', lineHeight: 1.45 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="repair-right-p2 repair-pair-right" aria-label="Installation — lifts and commercial work">
              <div className="install-pair-photo-grid__item">
                <img src={INSTALL_PAGE_PHOTO_CRANE} alt="Commercial HVAC — lifts and installs for heavy equipment" />
              </div>
            </aside>
          </div>
        ) : isMaintenancePage ? (
          <div className="repair-included-section">
            <div style={{ minWidth: 0, textAlign: 'left' }}>
              <SectionTag>What's included</SectionTag>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 16 }}>What You Get</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {svc.details.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--cool)', marginTop: 2, flexShrink: 0 }}><CheckIcon /></div>
                    <span style={{ fontSize: '0.94rem', color: '#4A5568', lineHeight: 1.45 }}>{d}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <SectionTag>Common scenarios</SectionTag>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 14 }}>When to Call Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {svc.scenarios.map((s, i) => (
                    <div key={i} style={{ background: 'white', borderRadius: 12, padding: '14px 16px', border: '1px solid rgba(0,0,0,0.04)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: 3 }}>{s.title}</div>
                      <div style={{ fontSize: '0.86rem', color: '#718096', lineHeight: 1.45 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="repair-section-photos" aria-label="Maintenance service photos">
              <div className="repair-photo-tile">
                <img src={MAINTENANCE_PAGE_SIDEBAR_PHOTO} alt="Seasonal tune-up and maintenance — keeping your system efficient" />
              </div>
              <p style={{ fontSize: '0.82rem', color: '#718096', lineHeight: 1.45, fontStyle: 'italic', margin: 0, textAlign: 'right' }}>
                Tune-ups and inspections — stay ahead of breakdowns before the Phoenix heat hits.
              </p>
            </aside>
          </div>
        ) : (
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
            <div>
              <SectionTag>What's included</SectionTag>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 16 }}>What You Get</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {svc.details.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--cool)', marginTop: 2, flexShrink: 0 }}><CheckIcon /></div>
                    <span style={{ fontSize: '0.94rem', color: '#4A5568', lineHeight: 1.45 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTag>Common scenarios</SectionTag>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(1.35rem, 2.8vw, 1.65rem)', color: 'var(--midnight)', lineHeight: 1.12, marginBottom: 14 }}>When to Call Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {svc.scenarios.map((s, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: 12, padding: '14px 16px', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.9rem', marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: '0.86rem', color: '#718096', lineHeight: 1.45 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <CTABanner navigate={navigate} />
    </div>
  );
};

// ========== ABOUT ==========
const AboutPage = ({ navigate }) => (
  <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--sand)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <SectionTag>Our story</SectionTag>
        <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--midnight)', lineHeight: 1.08, marginBottom: 24 }}>Built on Frustration.<br />Fueled by <span style={{ color: 'var(--flame)' }}>Doing It Right.</span></h1>
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'var(--cool)', margin: '0 auto 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(21,101,160,0.2)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -6, border: '2px dashed rgba(21,101,160,0.3)', borderRadius: '50%' }} />
          <UserIcon />
        </div>
        <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontStyle: 'italic', color: 'var(--midnight)', lineHeight: 1.5, marginBottom: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          "I didn't start this company to get rich. I started it because I got tired of watching big outfits charge my neighbors a fortune and still make them wait three days in a hot house."
        </blockquote>
        <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '1rem' }}>All Star Refrigeration</div>
        <div style={{ color: 'var(--cool)', fontSize: '0.88rem', fontWeight: 500, marginBottom: 36 }}>Locally Owned & Operated — Phoenix, AZ</div>
      </div>
    </section>

    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: 750, margin: '0 auto' }}>
        <div style={{ fontSize: '1.08rem', lineHeight: 1.85, color: '#4A5568' }}>
          <p style={{ marginBottom: 20 }}>All Star Refrigeration was born out of frustration — the kind you feel when you're on hold for 45 minutes with a company that has 200 trucks but can't get one to your house before next week. The kind you feel when a tech shows up, spends 10 minutes, and hands you a $1,200 bill for a $40 capacitor.</p>
          <p style={{ marginBottom: 20 }}>We saw how the big companies operated: volume over quality, upsells over honesty, shareholders over customers. And we thought — <strong style={{ color: 'var(--midnight)' }}>what if someone just did this the right way?</strong></p>
          <p style={{ marginBottom: 20 }}>That's All Star. We show up fast, we tell you the truth, and we charge you fair. We don't have a marketing department or a fleet of 100 trucks. What we have is a crew that genuinely cares about the people we serve — because they're our neighbors, our friends, the families we see at the grocery store and the little league field.</p>
          <p style={{ marginBottom: 20 }}>Every job, whether it's a $150 capacitor swap or a $10,000 system install, gets the same treatment: <strong style={{ color: 'var(--midnight)' }}>honest diagnosis, upfront pricing, and work done right the first time.</strong> If we wouldn't do it to our own mother's house, we won't do it to yours.</p>
          <p>We're not trying to be the biggest HVAC company in Phoenix. We're trying to be the one you tell your friends about.</p>
        </div>

        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {[
            { icon: <ClockIcon />, title: "Same-Day Service", desc: "Because broken AC in Phoenix is an emergency, not an inconvenience." },
            { icon: <ThumbsUpIcon />, title: "Honest Pricing", desc: "We tell you the cost before we start. No surprise invoices. Ever." },
            { icon: <ShieldIcon />, title: "Fully Licensed", desc: "ROC licensed, fully insured, background-checked techs." },
            { icon: <UsersIcon />, title: "Locally Owned", desc: "We live here, we work here, and our reputation is everything." }
          ].map((v, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 16, padding: 28, textAlign: 'center', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cool)', margin: '0 auto 14px' }}>{v.icon}</div>
              <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.95rem', marginBottom: 6 }}>{v.title}</div>
              <div style={{ fontSize: '0.88rem', color: '#718096', lineHeight: 1.5 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section style={{ padding: 'clamp(60px, 8vw, 80px) clamp(24px, 4vw, 80px)', background: 'white' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <SectionTag>Serving all of Phoenix metro</SectionTag>
        <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.8rem', color: 'var(--midnight)', lineHeight: 1.1, marginBottom: 30 }}>Service Areas</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {SERVICE_AREAS.map(area => (
            <span key={area} style={{ background: 'var(--ice)', color: 'var(--cool-deep)', padding: '8px 20px', borderRadius: 30, fontWeight: 600, fontSize: '0.9rem' }}>{area}</span>
          ))}
        </div>
      </div>
    </section>

    <CTABanner navigate={navigate} />
  </div>
);

// ========== REVIEWS ==========
const ReviewsPage = ({ navigate }) => (
  <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <SectionTag>Real reviews from real neighbors</SectionTag>
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: 'var(--midnight)', lineHeight: 1.08, marginBottom: 14 }}>What Phoenix Says About All Star</h1>
          <p style={{ fontSize: '1.05rem', color: '#4A5568', maxWidth: 550, margin: '0 auto' }}>We don't run ads with actors. We let our work speak. Here's what our neighbors have to say.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#4A5568', fontStyle: 'italic', marginBottom: 18, flex: 1 }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--cool)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>{r.initials}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.9rem' }}>{r.name}</div>
                  <div style={{ color: '#718096', fontSize: '0.8rem' }}>{r.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner navigate={navigate} />
  </div>
);

// ========== CONTACT ==========
const ContactPage = ({ navigate }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    urgency: '',
    message: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          urgency: form.urgency,
          message: form.message,
          company: form.company,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Could not send. Please try again or call us.');
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please call or email us.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid #E2E8F0',
    fontSize: '1rem', fontFamily: "'DM Sans', sans-serif", background: 'white',
    outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box'
  };
  const labelStyle = { display: 'block', fontWeight: 600, fontSize: '0.88rem', color: 'var(--midnight)', marginBottom: 6 };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 80px)', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 50 }}>
          {/* Contact Info */}
          <div>
            <SectionTag>Get in touch</SectionTag>
            <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.6rem)', color: 'var(--midnight)', lineHeight: 1.08, marginBottom: 18 }}>Let's Get You <span style={{ color: 'var(--cool)' }}>Comfortable.</span></h1>
            <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: 1.7, marginBottom: 36 }}>
              Whether it's an emergency or you're planning ahead, we're here. Ask about our <strong>{SERVICE_CALL_SHORT}</strong> — then call us for the fastest response, or fill out the form and we'll get back to you within the hour.
            </p>

            {/* Quick contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              <a href={PHONE_HREF} style={{
                display: 'flex', alignItems: 'center', gap: 16, background: 'var(--flame)', color: 'white',
                padding: '20px 24px', borderRadius: 16, textDecoration: 'none', transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(196,30,36,0.25)'
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PhoneIcon /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Call 9–5 — {PHONE}</div>
                  <div style={{ fontSize: '0.88rem', opacity: 0.8 }}>Talk to a real person during business hours.</div>
                </div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'white', padding: '18px 24px', borderRadius: 16, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cool)' }}><MailIcon /></div>
                <div>
                  <a href={EMAIL_HREF} style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.95rem', textDecoration: 'none' }}>{EMAIL}</a>
                  <div style={{ fontSize: '0.85rem', color: '#718096' }}>We respond within 1 hour</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'white', padding: '18px 24px', borderRadius: 16, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cool)' }}><MapPinIcon /></div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.95rem' }}>16227 N 28th Pl, Phoenix, AZ 85032</div>
                  <div style={{ fontSize: '0.85rem', color: '#718096' }}>Serving homes and businesses across the Phoenix metro area</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={{ background: 'white', borderRadius: 16, padding: '24px 28px', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontWeight: 700, color: 'var(--midnight)', fontSize: '0.95rem', marginBottom: 12 }}>Hours of Operation</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { day: 'Phone support', hours: 'Mon–Sat, 9AM–5PM', highlight: true },
                  { day: 'On-site appointments', hours: 'Mon–Sat, 8AM–7PM' },
                  { day: 'Online booking', hours: '24/7', highlight: false },
                ].map((h, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: h.highlight ? 'var(--flame)' : '#4A5568', fontWeight: h.highlight ? 700 : 400 }}>{h.day}</span>
                    <span style={{ color: h.highlight ? 'var(--flame)' : 'var(--midnight)', fontWeight: 600 }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ background: 'white', borderRadius: 20, padding: 48, textAlign: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', margin: '0 auto 20px' }}><CheckIcon /></div>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.5rem', color: 'var(--midnight)', marginBottom: 10 }}>We Got It!</h3>
                <p style={{ color: '#4A5568', lineHeight: 1.6 }}>We'll be in touch within the hour. If it's urgent, don't wait — call us directly at <a href={PHONE_HREF} style={{ color: 'var(--flame)', fontWeight: 700 }}>{PHONE}</a>.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} style={{ position: 'relative', background: 'white', borderRadius: 20, padding: 'clamp(24px, 4vw, 40px)', border: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 96 }}>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.4rem', color: 'var(--midnight)', marginBottom: 6 }}>Request Service</h3>
                <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: 24 }}>Fill this out and we'll call you back within an hour.</p>

                {/* Honeypot — leave hidden; bots often fill this */}
                <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>

                {submitError && (
                  <div style={{ marginBottom: 16, padding: '12px 14px', borderRadius: 12, background: '#FEF2F2', color: '#B91C1C', fontSize: '0.9rem', fontWeight: 600 }}>
                    {submitError}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Smith" required />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input style={inputStyle} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="(602) 763-7600" required type="tel" />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Email (optional)</label>
                  <input style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@email.com" type="email" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Service Needed</label>
                    <select style={{...inputStyle, cursor: 'pointer', appearance: 'auto'}} value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
                      <option value="">Select...</option>
                      <option>Emergency AC Repair</option>
                      <option>AC Installation / Replacement</option>
                      <option>Heating Repair</option>
                      <option>Seasonal Maintenance</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>How Urgent?</label>
                    <select style={{...inputStyle, cursor: 'pointer', appearance: 'auto'}} value={form.urgency} onChange={e => setForm({...form, urgency: e.target.value})} required>
                      <option value="">Select...</option>
                      <option>🔴 Emergency — AC is down now</option>
                      <option>🟡 Soon — within a few days</option>
                      <option>🟢 Planning ahead</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>What's Going On?</label>
                  <textarea style={{...inputStyle, minHeight: 100, resize: 'vertical'}} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what's happening — weird noises, no cold air, thermostat reading, anything helps..." />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: '100%', padding: '16px', background: submitting ? '#9CA3AF' : 'var(--flame)', color: 'white', border: 'none',
                    borderRadius: 14, fontSize: '1.05rem', fontWeight: 700, cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans', sans-serif",
                    boxShadow: '0 4px 15px rgba(196,30,36,0.3)', transition: 'all 0.3s'
                  }}
                >{submitting ? 'Sending…' : 'Send Request'}</button>

                <p style={{ textAlign: 'center', marginTop: 14, fontSize: '0.82rem', color: '#A0AEC0' }}>
                  Need help now? Skip the form — <a href={PHONE_HREF} style={{ color: 'var(--flame)', fontWeight: 600 }}>call us directly</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ — anchor: #contact-faq for direct links */}
      <section id="contact-faq" style={{ scrollMarginTop: 96, padding: 'clamp(60px, 8vw, 80px) clamp(24px, 4vw, 80px)', background: 'white' }}>
        <div style={{ maxWidth: 750, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <SectionTag>FAQ</SectionTag>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.8rem', color: 'var(--midnight)', lineHeight: 1.1 }}>Common Questions</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: 'var(--warm-white)', borderRadius: 14, border: '1px solid rgba(0,0,0,0.04)', overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
        padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--midnight)'
      }}>
        {q}
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', flexShrink: 0, marginLeft: 12 }}><ChevronDown /></span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 18px', fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.7 }}>{a}</div>
      )}
    </div>
  );
};

// --------------- ROUTER ---------------
export default function AllStarWebsite() {
  const [page, setPage] = useState('home');
  /** When on contact page: which nav intent — highlights Contact vs FAQ ('top' | 'form' | 'faq') */
  const [contactNavTarget, setContactNavTarget] = useState(null);
  const pageRef = useRef(page);
  pageRef.current = page;

  useEffect(() => { injectStyles(); }, []);

  useEffect(() => {
    const base = "All Star Refrigeration | Phoenix Heating, Cooling & Refrigeration";
    const titles = {
      home: base,
      services: "Services | All Star Refrigeration – AC, Heating & Maintenance",
      about: "About | All Star Refrigeration – Phoenix, AZ",
      reviews: "Reviews | All Star Refrigeration – Trusted by Phoenix Homeowners",
      contact: "Contact | All Star Refrigeration – Schedule Service",
    };
    document.title = titles[page] || base;
  }, [page]);

  const clearUrlHash = () => {
    if (typeof history === 'undefined') return;
    const path = window.location.pathname + window.location.search;
    if (window.location.hash) history.replaceState(null, '', path);
  };

  const navigate = (p, opts) => {
    const prev = pageRef.current;
    const willChange = prev !== p;
    setPage(p);
    if (p === 'contact') {
      if (opts?.scrollToForm) setContactNavTarget('form');
      else if (opts?.scrollToFaq) setContactNavTarget('faq');
      else setContactNavTarget('top');
    } else {
      setContactNavTarget(null);
    }
    if (opts?.scrollToForm) {
      clearUrlHash();
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, willChange ? 280 : 80);
    } else if (opts?.scrollToFaq) {
      setTimeout(() => {
        document.getElementById('contact-faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (typeof history !== 'undefined') history.replaceState(null, '', `${window.location.pathname}${window.location.search}#contact-faq`);
      }, willChange ? 280 : 80);
    } else {
      queueMicrotask(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      queueMicrotask(() => clearUrlHash());
    }
  };

  const renderPage = () => {
    if (page === 'home') return <HomePage navigate={navigate} />;
    if (page === 'services') return <ServicesPage navigate={navigate} />;
    if (page === 'about') return <AboutPage navigate={navigate} />;
    if (page === 'reviews') return <ReviewsPage navigate={navigate} />;
    if (page === 'contact') return <ContactPage navigate={navigate} />;
    if (page.startsWith('service-')) return <ServiceDetailPage serviceId={page.replace('service-', '')} navigate={navigate} />;
    return <HomePage navigate={navigate} />;
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--charcoal)', background: 'var(--warm-white)', minHeight: '100vh' }}>
      <EmergencyBar navigate={navigate} />
      <Header currentPage={page} navigate={navigate} contactNavTarget={contactNavTarget} />
      {renderPage()}
      <Footer navigate={navigate} />
      <div className="allstar-mobile-cta">
        <button
          type="button"
          className="allstar-mobile-cta__request"
          onClick={() => navigate('contact', { scrollToForm: true })}
          aria-label="Request service — open contact form"
        >
          <MailIcon />
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15, textAlign: 'left' }}>
            <span>Request service</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, opacity: 0.92 }}>{SERVICE_CALL_PRICE} · we’ll call you back</span>
          </span>
        </button>
      </div>
    </div>
  );
}
