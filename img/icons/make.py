# Icônes de Dentadi : la molaire en traits de la page d'accueil, sur fond teal foncé.
T='M104 118C104 62 148 40 190 56C232 40 276 62 276 118C276 158 260 178 256 216C252 264 244 308 228 336C222 346 210 340 206 324C200 298 196 264 190 248C184 264 180 298 174 324C170 340 158 346 152 336C136 308 128 264 124 216C120 178 104 158 104 118Z'
PULP='M150 128C150 112 230 112 230 128C230 148 216 158 206 168L174 168C164 158 150 148 150 128Z'
CANAL='M176 170C172 214 168 270 162 322M204 170C208 214 212 270 218 322'
GUML='M24 192C54 166 92 162 108 176C116 196 122 214 128 226C98 234 54 232 24 224'
GUMR='M356 192C326 166 288 162 272 176C264 196 258 214 252 226C282 234 326 232 356 224'
ENAMEL='M118 120C118 74 152 56 190 70C228 56 262 74 262 120'
LINE='#8fe9f2'
def icon(S,detail=True,sw=1.0):
    # molaire centrée (centre ≈ 190,193 dans le repère de la page d'accueil)
    tx=512-190*S; ty=512-193*S
    w=lambda x: f'{x*sw/S*S/S:.2f}'
    g=f'<path d="{T}" fill="{LINE}" fill-opacity=".14" stroke="{LINE}" stroke-width="{7*sw}" stroke-linejoin="round"/>'
    g+=f'<path d="{PULP}" fill="{LINE}" fill-opacity=".30" stroke="{LINE}" stroke-width="{5.5*sw}" stroke-linejoin="round"/>'
    g+=f'<path d="{CANAL}" fill="none" stroke="{LINE}" stroke-width="{5*sw}" stroke-linecap="round"/>'
    if detail:
        g+=f'<path d="{ENAMEL}" fill="none" stroke="{LINE}" stroke-width="4" opacity=".7" stroke-linecap="round"/>'
        g+=f'<path d="{GUML}" fill="none" stroke="{LINE}" stroke-width="4.5" opacity=".75"/><path d="{GUMR}" fill="none" stroke="{LINE}" stroke-width="4.5" opacity=".75"/>'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0c6d7b"/><stop offset=".5" stop-color="#084f5b"/><stop offset="1" stop-color="#042e37"/></linearGradient><radialGradient id="gl" cx=".25" cy=".2" r=".8"><stop offset="0" stop-color="#7fe3ee" stop-opacity=".22"/><stop offset="1" stop-color="#7fe3ee" stop-opacity="0"/></radialGradient></defs><rect width="1024" height="1024" fill="url(#bg)"/><rect width="1024" height="1024" fill="url(#gl)"/><g transform="translate({tx:.1f},{ty:.1f}) scale({S})">{g}</g></svg>'''
open('icon.svg','w').write(icon(2.0))
open('icon-maskable.svg','w').write(icon(1.6))
open('icon-small.svg','w').write(icon(2.4,detail=False,sw=1.9))
