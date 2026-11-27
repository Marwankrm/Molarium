# Génère les icônes de Dentadi : molaire en contours emboîtés (strates de pierre).
MOLAR='M8.4 9.6C8.4 6.4 11.4 4.6 14.4 5.6c1 .3 2.2.3 3.2 0 3-1 6 .8 6 4 0 3.6-1.4 5.4-1.8 8.8-.5 3.4-1.1 8-3 8-1.8 0-1.8-4.4-2.8-4.4s-1 4.4-2.8 4.4c-1.9 0-2.5-4.6-3-8-.4-3.4-1.8-5.2-1.8-8.8z'
def icon(S,rings):
    tx=512-16*S; ty=512-16.6*S
    g=''
    for sc,w,op in rings:
        g+=f'<path d="{MOLAR}" transform="translate({16*(1-sc):.2f},{16.4*(1-sc):.2f}) scale({sc})" fill="none" stroke="#fff" stroke-width="{w/sc:.2f}" stroke-linejoin="round" opacity="{op}"/>'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#17a5b5"/><stop offset=".55" stop-color="#0e7c8a"/><stop offset="1" stop-color="#084b56"/></linearGradient></defs><rect width="1024" height="1024" fill="url(#bg)"/><g transform="translate({tx:.1f},{ty:.1f}) scale({S})">{g}</g></svg>'''
FULL=[(1.0,1.3,1),(.80,1.1,.9),(.60,.95,.8),(.40,.8,.7),(.20,.7,.6)]
SMALL=[(1.0,2.0,1),(.66,1.8,.85),(.34,1.6,.7)]
open('icon.svg','w').write(icon(34,FULL))
open('icon-maskable.svg','w').write(icon(27,FULL))
open('icon-small.svg','w').write(icon(34,SMALL))
