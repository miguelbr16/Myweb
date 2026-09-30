# Puesta en marcha de la empresa

> **Estado:** checklist + recomendaciones (2026-09-30)  
> ⚠️ Los puntos fiscales y legales son orientativos. **Confírmalos con un gestor o asesor** antes de actuar: las cuotas y los plazos cambian.

## 1. Marca

**Criterios para el nombre:**
- Corto y fácil de decir por teléfono y de escribir en un DM.
- Dominio `.com` o `.es` y usuario de Instagram libres.
- Que no te ate a un único servicio: vas a vender webs **y** automatizaciones.
- Comprueba en la OEPM (buscador de marcas) que no está registrada en las clases 35 y 42.

**Candidatos para explorar** (no se ha comprobado su disponibilidad):

| Nombre | Idea |
|--------|------|
| **Métrica Web** | Tu diferencial: webs medidas con datos |
| **Convierte** / **Convierte Studio** | El resultado que compra el cliente |
| **Borràs Digital** | Marca personal: confianza local y escalable |
| **Clic Local** | Negocios locales que captan por WhatsApp o formulario |
| **Datoweb** | Unión de datos y web |

**Recomendación:** si vas a vender tú en persona al principio, una **marca personal o semipersonal** (tu nombre + "Digital" o "Studio") genera confianza antes y es más barata de posicionar. Siempre puedes pasar a una marca de empresa más adelante.

## 2. Legal y fiscal antes de la primera factura

| # | Acción | Notas |
|---|--------|-------|
| 1 | **Alta en Hacienda** (modelo 036) | Epígrafe IAE habitual: **763, programadores y analistas de informática** (confírmalo con el gestor según lo que vendas) |
| 2 | **Alta en autónomos (RETA)** | Pregunta por la **cuota reducida para nuevos autónomos** ("tarifa plana") y sus condiciones actuales |
| 3 | **Facturación** | IVA 21 %. Retención de IRPF en facturas a empresas y profesionales (15 %, o **7 % los primeros años** de actividad). Usa un software de facturación **compatible con VeriFactu**, que será obligatorio en los próximos años |
| 4 | **Impuestos trimestrales** | Modelo 303 (IVA) y 130 (IRPF, salvo excepciones), más los resúmenes anuales. Un gestor online suele costar entre 40 y 80 €/mes |
| 5 | **Cuenta bancaria separada** para el negocio | Simplifica la contabilidad |
| 6 | **Seguro de responsabilidad civil profesional** | Recomendable si tocas webs de otros y gestionas sus leads |
| 7 | **Textos legales de tu web** | Aviso legal (LSSI: titular, NIF, dirección, email), privacidad (RGPD) y cookies |
| 8 | **Registro de marca** en la OEPM (opcional al principio) | Clases 35 y 42. Hazlo cuando el nombre esté validado |

> Alternativa mientras validas: si solo vas a hacer 1 o 2 proyectos de prueba, pregunta al gestor por las opciones para facturar puntualmente. Pero para vender de forma recurrente necesitas el alta.

## 3. Contratos y documentos para clientes

- [ ] **Presupuesto o propuesta** con alcance MVP / Fase 2 / Fase 3, plazos y número de revisiones incluidas
- [ ] **Contrato de servicios** que cubra:
  - Pago del 50 % al inicio y 50 % en la entrega.
  - Qué pasa si el cliente no entrega los contenidos a tiempo.
  - Propiedad del código y del dominio: **el dominio siempre a nombre del cliente**.
  - Mantenimiento aparte.
- [ ] **Contrato de encargado del tratamiento** (art. 28 RGPD) cuando gestiones los leads o formularios del cliente
- [ ] **Checklist de entrega:** accesos, dominio, analítica, formación de 30 minutos

## 4. RGPD del propio negocio

- **Encargados del tratamiento** que debes listar en tu política de privacidad: Cloudflare (hosting, analítica, email routing), Resend (email) y, si los usas, Notion o Google.
- **Formulario:** pide solo los datos necesarios (D-05), añade un checkbox de privacidad y define un plazo de conservación (p. ej. 12 meses sin relación comercial → borrar).
- **Tabla de leads y prospectos:** fuera del repo público y con acceso solo tuyo.
- **Outbound:** ver las reglas en [OUTBOUND.md](../playbooks/OUTBOUND.md).

## 5. Herramientas y costes mínimos

| Herramienta | Uso | Coste aproximado |
|-------------|-----|------------------|
| Dominio | Marca | ~10–15 €/año |
| Cloudflare | Hosting, DNS, CDN, analítica, Turnstile, email entrante | 0 € (plan gratuito) |
| Resend | Email saliente del formulario | 0 € hasta ~3.000 emails/mes |
| GitHub | Código y documentación | 0 € |
| Gmail o Google Workspace | Email para enviar como `hola@dominio` | 0 € (Gmail + alias) o ~6 €/mes |
| Software de facturación | Facturas VeriFactu | 0–15 €/mes |
| Gestor | Impuestos trimestrales | 40–80 €/mes |
| Cuota de autónomo | Seguridad Social | Consultar cuota reducida vigente |

**Coste fijo estimado para arrancar:** la cuota de autónomo + el gestor + unos 15 €/año de dominio. El resto puede ser gratis al principio.

## 6. Ideas y recomendaciones para crecer

1. **Productiza la auditoría express.** Es tu mejor gancho (ver [OUTBOUND.md](../playbooks/OUTBOUND.md)), y más adelante puede ser un producto de pago (49–99 €) que se descuenta si contratan la web.
2. **Mantenimiento como base de ingresos recurrentes.** 5 clientes a 80–150 €/mes cubren los costes fijos. Ofrécelo en todas las propuestas.
3. **Google Business Profile como extra barato.** Para negocios locales suele traer más contactos que la propia web. Optimizarlo lleva 1–2 h y se puede vender a 90–150 €.
4. **Demos por vertical.** Una landing de ejemplo por sector (p. ej. clínica dental ficticia) sirve de portfolio mientras no tengas casos reales. Señálala siempre como demo.
5. **Alianzas.** Gestorías, fotógrafos y agencias de redes sociales sin desarrollador tienen clientes que necesitan web. Ofrece una comisión por referido.
6. **Mide desde el día 1.** Tu diferencial es el dato: enseña al cliente el "antes y después" (velocidad, clics en WhatsApp, formularios enviados) a los 30 días de lanzar.
7. **No construyas producto interno** (CRM, presupuestador) hasta cumplir los triggers. La tabla manual basta para los primeros 30 leads.
8. **Reserva tiempo fijo.** Si vas poco a poco, bloquea 2–3 sesiones por semana y dedica **al menos una a vender**, no solo a construir.
