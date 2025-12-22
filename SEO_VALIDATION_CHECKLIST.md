# ✅ CHECKLIST DE VALIDACIÓN SEO - EDJ Chile

Use este checklist para verificar que todo está funcionando correctamente.

---

## 📱 VALIDACIÓN GENERAL

### Meta Tags Básicos
- [ ] Todas las páginas tienen `<title>` único
- [ ] Todas las páginas tienen `<meta description>` único
- [ ] Todas las páginas tienen `<link rel="canonical">`
- [ ] Todas las páginas tienen `lang="es"`
- [ ] Todas las páginas tienen `robots` meta tag
- [ ] Todas las páginas tienen `theme-color`
- [ ] Todas las páginas tienen keywords relevantes

### Open Graph (Facebook/LinkedIn)
- [ ] `og:title` en todas las páginas
- [ ] `og:description` en todas las páginas
- [ ] `og:image` con URL completa
- [ ] `og:image:width` y `og:image:height`
- [ ] `og:url` con URL completa
- [ ] `og:type` definido
- [ ] `og:site_name` = "EDJ Chile"
- [ ] `og:locale` = "es_CL"

### Twitter Cards
- [ ] `twitter:card` en todas las páginas
- [ ] `twitter:title` en todas las páginas
- [ ] `twitter:description` en todas las páginas
- [ ] `twitter:image` en todas las páginas

---

## 🎯 POR PÁGINA

### ✅ index.html
- [ ] Google Analytics configurado
- [ ] SportsActivityLocation structured data
- [ ] FAQPage structured data
- [ ] Datos de contacto correctos
- [ ] Horarios de atención correctos
- [ ] Redes sociales enlazadas

### ✅ instructores/index.html
- [ ] Google Analytics configurado
- [ ] BreadcrumbList structured data
- [ ] Person structured data (5 instructores)
- [ ] Nombres e imágenes correctas
- [ ] Títulos/roles correctos

### ✅ programas/index.html
- [ ] Google Analytics configurado
- [ ] BreadcrumbList structured data
- [ ] Service catalog structured data
- [ ] 3 programas listados
- [ ] Descripciones completas

### ✅ sedes/index.html
- [ ] Google Analytics configurado
- [ ] BreadcrumbList structured data
- [ ] 3x SportsActivityLocation (Las Condes, Chillán, V Región)
- [ ] Direcciones correctas
- [ ] Teléfonos correctos
- [ ] Emails correctos
- [ ] Horarios correctos
- [ ] Coordenadas GPS (si disponibles)

### ✅ faqs/index.html
- [ ] Google Analytics configurado
- [ ] BreadcrumbList structured data
- [ ] FAQPage completa (9 preguntas)
- [ ] Respuestas completas y correctas

---

## 🗂️ ARCHIVOS DEL SITIO

### Archivos Críticos
- [ ] `sitemap.xml` creado
- [ ] `robots.txt` creado
- [ ] Ambos archivos en directorio raíz
- [ ] URLs en sitemap son accesibles

### Estructura de Archivos
```
/EDJ
  ├── index.html ✅
  ├── sitemap.xml ✅
  ├── robots.txt ✅
  ├── styles.css ✅
  ├── /instructores
  │   └── index.html ✅
  ├── /programas
  │   └── index.html ✅
  ├── /sedes
  │   └── index.html ✅
  ├── /faqs
  │   └── index.html ✅
  └── /assets
      └── /img
```

---

## 🔧 CONFIGURACIÓN EXTERNA

### Google Analytics
- [ ] Cuenta creada en analytics.google.com
- [ ] Propiedad "EDJ Chile" configurada
- [ ] Measurement ID obtenido
- [ ] ID reemplazado en las 5 páginas
- [ ] Tracking verificado en tiempo real
- [ ] Objetivos/conversiones configurados (opcional)

### Google Search Console
- [ ] Propiedad agregada
- [ ] Dominio verificado
- [ ] Sitemap.xml enviado
- [ ] URLs indexándose correctamente
- [ ] Sin errores de cobertura
- [ ] Core Web Vitals verificados

### Google My Business (Recomendado)
- [ ] Perfil creado para Las Condes
- [ ] Perfil creado para Chillán
- [ ] Perfil creado para V Región
- [ ] Fotos agregadas
- [ ] Horarios configurados
- [ ] Categoría: "Gimnasio de artes marciales"

---

## 🧪 TESTING Y VALIDACIÓN

### Herramientas Online

#### 1. Google Rich Results Test
🔗 https://search.google.com/test/rich-results
- [ ] index.html validado
- [ ] instructores/index.html validado
- [ ] programas/index.html validado
- [ ] sedes/index.html validado
- [ ] faqs/index.html validado

#### 2. Schema Markup Validator
🔗 https://validator.schema.org/
- [ ] Structured data válido sin errores
- [ ] Sin warnings críticos

#### 3. Facebook Sharing Debugger
🔗 https://developers.facebook.com/tools/debug/
- [ ] Preview correcto de index
- [ ] Imagen se muestra correctamente
- [ ] Título y descripción correctos

#### 4. Twitter Card Validator
🔗 https://cards-dev.twitter.com/validator
- [ ] Card preview correcto
- [ ] Imagen cargando

#### 5. PageSpeed Insights
🔗 https://pagespeed.web.dev/
- [ ] Mobile score > 80
- [ ] Desktop score > 90
- [ ] Core Web Vitals "verde"

#### 6. Mobile-Friendly Test
🔗 https://search.google.com/test/mobile-friendly
- [ ] Todas las páginas mobile-friendly
- [ ] Texto legible sin zoom
- [ ] Botones táctiles apropiados

---

## 🎨 VALIDACIÓN VISUAL

### En Navegador
- [ ] Favicon muestra correctamente
- [ ] Theme color en móvil (barra superior)
- [ ] No hay errores en consola
- [ ] Google Analytics tag disparando

### Vista de Código Fuente
- [ ] HTML bien formateado
- [ ] Structured data JSON válido
- [ ] Sin scripts rotos
- [ ] Sin enlaces rotos

---

## 📊 MÉTRICAS A MONITOREAR

### Primera Semana
- [ ] Usuarios únicos
- [ ] Páginas más visitadas
- [ ] Tiempo promedio en sitio
- [ ] Tasa de rebote
- [ ] Dispositivos (móvil vs desktop)

### Primer Mes
- [ ] Conversiones (clases de prueba)
- [ ] Origen de tráfico
- [ ] Keywords que traen visitas
- [ ] Comportamiento por sección

### Trimestral
- [ ] Posiciones en Google (keywords principales)
- [ ] Crecimiento de tráfico orgánico
- [ ] Rich snippets apareciendo
- [ ] Backlinks obtenidos

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### ❌ Google Analytics no muestra datos
**Solución:**
- Verifica que el ID sea correcto
- Espera 24-48 horas para datos históricos
- Verifica con extensión de Chrome "Tag Assistant"

### ❌ Structured Data no valida
**Solución:**
- Revisa comillas y comas en JSON
- Asegura que las URLs sean absolutas
- Verifica que no haya errores de sintaxis

### ❌ Preview de Facebook no funciona
**Solución:**
- URLs deben ser absolutas (https://...)
- Imagen debe ser accesible públicamente
- Dimensiones mínimas: 1200x630px
- Usa el debugger para forzar refresh

### ❌ Sitio no aparece en Google
**Solución:**
- Envía sitemap en Search Console
- Solicita indexación manual
- Espera 2-4 semanas para nuevos sitios
- Crea backlinks de calidad

---

## 📈 OPTIMIZACIONES FUTURAS

### SEO Técnico
- [ ] Implementar SSL/HTTPS (si no está)
- [ ] Configurar compresión GZIP
- [ ] Minificar CSS/JS
- [ ] Lazy loading para imágenes
- [ ] Implementar caché del navegador

### Contenido
- [ ] Blog con artículos de Jiu Jitsu
- [ ] Videos de clases/testimonios
- [ ] Página de testimonios
- [ ] Página de eventos/competencias
- [ ] Newsletter

### Link Building
- [ ] Directorios locales
- [ ] Colaboraciones con gimnasios
- [ ] Guest posting
- [ ] Redes sociales activas
- [ ] Google My Business posts

### Schema.org Adicional
- [ ] VideoObject (videos de clases)
- [ ] Review/Rating (testimonios)
- [ ] Event (competencias)
- [ ] Article (blog posts)

---

## ✅ FIRMA DE APROBACIÓN

Una vez completado todo el checklist:

**Revisado por:** ___________________  
**Fecha:** ___________________  
**Resultado:** ☐ Aprobado  ☐ Requiere ajustes

**Notas adicionales:**
________________________________________________
________________________________________________
________________________________________________

---

**Última actualización:** 22 de Diciembre, 2025  
**Versión:** 1.0

---
