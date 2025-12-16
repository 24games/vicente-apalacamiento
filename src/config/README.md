# 📋 Sistema de Roteamento Dinâmico

## Visão Geral

Este sistema permite que a Landing Page use links diferentes de Telegram baseados na slug da URL, enquanto mantém o link do WhatsApp fixo para todas as campanhas.

## Estrutura

### `campaignLinks.js`

Arquivo de configuração central que contém:

- **WhatsApp Fixo**: `WHATSAPP_LINK` - Link único para todas as páginas
- **Mapeamento Telegram**: `TELEGRAM_LINKS` - Objeto com slugs e seus respectivos links
- **Funções Utilitárias**:
  - `getTelegramLink(slug)` - Retorna o link do Telegram baseado na slug
  - `getSlugFromUrl()` - Extrai a slug da URL atual

## Como Funciona

### 1. Detecção de Slug

O sistema detecta automaticamente a slug da URL:

```
https://dominio.com/cr1-a6f2  → slug: "cr1-a6f2"
https://dominio.com/cr2-a6f2  → slug: "cr2-a6f2"
https://dominio.com/cr3-a6f2  → slug: "cr3-a6f2"
https://dominio.com/          → slug: null (usa padrão)
```

### 2. Mapeamento de Links

| Slug | Link do Telegram |
|------|------------------|
| `cr1-a6f2` | `https://t.me/vicentetipstertelegrambot?start=w48122701` |
| `cr2-a6f2` | `https://t.me/vicentetipstertelegrambot?start=w48122703` |
| `cr3-a6f2` | `https://t.me/vicentetipstertelegrambot?start=w48122705` |
| **Padrão** | `https://t.me/vicentetipstertelegrambot?start=w48122701` (cr1-a6f2) |

### 3. WhatsApp Fixo

O link do WhatsApp é sempre o mesmo, independente da slug:

```
https://wa.me/message/OFJTC6W4P25EA1
```

## Adicionar Nova Campanha

Para adicionar uma nova slug e link:

1. Abra `src/config/campaignLinks.js`
2. Adicione no objeto `TELEGRAM_LINKS`:

```javascript
export const TELEGRAM_LINKS = {
  'cr1-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122701',
  'cr2-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122703',
  'cr3-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122705',
  'nova-slug': 'https://t.me/vicentetipstertelegrambot?start=w48122707', // Nova
};
```

## Uso nos Componentes

### CTAButton

O componente `CTAButton` recebe o `telegramLink` como prop:

```jsx
<CTAButton telegramLink={telegramLink} />
<CTAButton telegramLink={telegramLink} variant="secondary" />
```

### LandingPage (App.jsx)

O componente principal recebe o `telegramLink` e repassa para os botões:

```jsx
export default function LandingPage({ telegramLink }) {
  // ...
  return (
    <>
      <CTAButton telegramLink={telegramLink} />
      {/* ... */}
    </>
  );
}
```

## Fluxo de Execução

```
1. Usuário acessa: dominio.com/cr1-a6f2
   ↓
2. main.jsx detecta slug da URL
   ↓
3. getTelegramLink() retorna link correspondente
   ↓
4. App.jsx recebe telegramLink como prop
   ↓
5. Todos os CTAButtons usam o telegramLink dinâmico
   ↓
6. WhatsApp sempre usa WHATSAPP_LINK fixo
```

## Debug

Em modo de desenvolvimento, o sistema loga no console:

```
🔗 Slug detectada: cr1-a6f2
📱 Link do Telegram: https://t.me/vicentetipstertelegrambot?start=w48122701
```

## Notas Importantes

- ✅ O WhatsApp é **sempre fixo** - não varia por slug
- ✅ O Telegram é **dinâmico** - varia conforme a slug
- ✅ Se a slug não existir, usa o link padrão (cr1-a6f2)
- ✅ Se não houver slug na URL, também usa o padrão







