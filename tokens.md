# Design Tokens — Johanna Otranto

## Colores
```
--cream:        #FFFBFE
--cream-dark:   #EDE0DC
--purple:       #624981
--purple-light: #8B6BA8
--purple-dark:  #3E2A54
--grad-top:     #E9CEC7
--grad-mid:     #B89CC0
--grad-bottom:  #5E457F
--violet: #2B1F45;
--lavender: #A984FF;
--pink: #F39BD8;
--soft: #6B5D84;
```

Use Cream tones for background 
Headings-text: --violet
Body-text: --soft
Accent: --lavender

-
## Gradientes
```
--grad-gold:  linear-gradient(180deg, #5E457F 0%, #E7BE7E 100%)
--grad-blush: linear-gradient(180deg, #5E457F 0%, #F39BD8 100%)
--grad-mint:  linear-gradient(180deg, #5E457F 0%, #D2EEEA 100%)
```


## Tipografía
- Headings / citas / italic → Inter, Bold.
- Headings / citas / italic (alt)→ Georgia, Bold.
- Body / labels / uppercase → Inter, Regular (sans-serif)
- annotations → Mynerve


## SVG symbols (definidos en carousel-base.html)
```html
<!-- Wordmark (279×39) — color via CSS color property -->
<svg style="height:14px; color:#624981" viewBox="0 0 279 39" xmlns="http://www.w3.org/2000/svg">
  <use href="#wordmark"/>
</svg>

<!-- Logomark circular J (67×112) — color via CSS color property -->
<svg width="28" height="47" viewBox="0 0 67 112" style="color:#624981" xmlns="http://www.w3.org/2000/svg">
  <use href="#logomark"/>
</svg>
```

## Reglas de color recurrentes
| Contexto | Color |
|---|---|
| Wordmark sobre fondo oscuro | `color: rgba(245,237,235,0.88)` |
| Wordmark sobre fondo claro | `color: rgba(98,73,129,0.50)` |
| Número de slide grande (48px) | `color: rgba(98,73,129,0.12)` |
| Número de slide mediano (36px) | `color: rgba(98,73,129,0.10)` |
| Borde slide interior | `1px solid rgba(98,73,129,0.15)` |

## Separador decorativo
```
✦
```
