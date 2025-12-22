# 🚀 GUÍA RÁPIDA: Configurar Google Analytics

## ⚠️ ACCIÓN REQUERIDA URGENTE

El sitio tiene Google Analytics instalado pero necesitas **configurar tu ID único**.

---

## 📋 PASOS (5 minutos)

### 1️⃣ Crear Cuenta de Google Analytics

1. Ve a: **https://analytics.google.com**
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Empezar a medir"

### 2️⃣ Configurar Propiedad

**Nombre de la cuenta:** EDJ Chile  
**Nombre de la propiedad:** EDJ Chile Website  
**Zona horaria:** (GMT-03:00) Santiago  
**Moneda:** Peso chileno (CLP)

### 3️⃣ Configurar Recopilación de Datos

- Selecciona: **Web**
- URL del sitio web: **https://www.edjchile.cl**
- Nombre del stream: **EDJ Chile Web**

### 4️⃣ Obtener tu Measurement ID

Después de crear la propiedad, verás un código como:

```
G-ABC123XYZ
```

**¡Este es tu ID único!** Cópialo.

### 5️⃣ Reemplazar en TODAS las Páginas

Busca y reemplaza `G-XXXXXXXXXX` con tu ID real en estos 5 archivos:

```
📄 /index.html
📄 /instructores/index.html
📄 /programas/index.html
📄 /sedes/index.html
📄 /faqs/index.html
```

**Búsqueda rápida (VS Code / Editor):**
- Presiona `Cmd+Shift+F` (Mac) o `Ctrl+Shift+F` (Windows)
- Buscar: `G-XXXXXXXXXX`
- Reemplazar con: `TU_ID_REAL`
- Reemplazar todo

### 6️⃣ Verificar que Funciona

1. Sube los archivos al servidor
2. Visita tu sitio: https://www.edjchile.cl
3. En Google Analytics > Informes > Tiempo real
4. Deberías ver "1 usuario activo ahora" (tú)

---

## ✅ EJEMPLO DE CÓDIGO CORRECTO

Antes (no funciona):
```javascript
gtag('config', 'G-XXXXXXXXXX');
```

Después (funciona):
```javascript
gtag('config', 'G-1A2B3C4D5E');
```

---

## 🎯 BONUS: Google Search Console

Después de configurar Analytics:

1. Ve a: **https://search.google.com/search-console**
2. Agregar propiedad: **https://www.edjchile.cl**
3. Verificar dominio (método DNS o archivo HTML)
4. Enviar sitemap: **https://www.edjchile.cl/sitemap.xml**

---

## 📞 ¿Problemas?

- **No veo datos en Analytics:** Espera 24-48 horas para datos históricos
- **Error de instalación:** Verifica que reemplazaste el ID en TODAS las páginas
- **No encuentra el sitio:** Asegúrate de que los archivos estén en el servidor

---

**Tiempo estimado:** ⏱️ 5-10 minutos  
**Dificultad:** 🟢 Fácil  
**Importancia:** 🔴 CRÍTICA

---
