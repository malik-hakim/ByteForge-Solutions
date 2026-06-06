import { Helmet } from 'react-helmet-async'

function SEO({ title, description, keywords, url, type = 'website' }) {
  const siteName = 'ByteForge Solutions'
  const defaultDescription = 'ByteForge Solutions — Jasa pengerjaan tugas IT profesional untuk mahasiswa. Cepat, rapi, dan tepat waktu.'
  const defaultKeywords = 'joki tugas, joki tugas IT, jasa tugas kuliah, joki coding, joki web, joki skripsi IT, ByteForge'
  const baseUrl = 'https://byteforgesolutions.com'

  const fullTitle = title ? `${title} — ${siteName}` : siteName
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (Facebook, WhatsApp, dll) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />

      {/* Tambahan */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Indonesian" />
    </Helmet>
  )
}

export default SEO