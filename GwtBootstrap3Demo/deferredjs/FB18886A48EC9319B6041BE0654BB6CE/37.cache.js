function Vrc(){}
function Trc(){inb(this,Xrc(new Yrc))}
function Krc(a,b,c){Qmb.call(this,a,b,c,(c1b(),b1b))}
function jsc(a){var b;if(!a.i){b=new Trc(new Vrc);a.i=b}return a.i}
function asc(a){var b;b=new Htb;So(b.b,WJc);Btb(b,s0(a));So(b.b,XJc);return new Z_(b.b.b)}
function Zrc(a){var b;b=new Htb;So(b.b,WJc);Btb(b,s0(a));So(b.b,XJc);return new Z_(b.b.b)}
function $rc(a){var b;b=new Htb;So(b.b,WJc);Btb(b,s0(a));So(b.b,XJc);return new Z_(b.b.b)}
function _rc(a){var b;b=new Htb;So(b.b,WJc);Btb(b,s0(a));So(b.b,XJc);return new Z_(b.b.b)}
function isc(a){var b;if(!a.g){b=new Krc(Zlb(vnb(a.b)),jsc(a),hsc(a));pmb((wnb(a.b),b),Hnb(wnb(a.b)));a.g=b}return a.g}
function Yrc(){this.b=Wr($doc);this.d=Wr($doc);this.f=Wr($doc);this.i=Wr($doc);this.c=new X1(this.b);this.e=new X1(this.d);this.g=new X1(this.f);this.j=new X1(this.i)}
function Xrc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q;b=new nIb;XAb(b,(c=new KDb(PJc),XAb(c,(d=new $Gb,d.b='Project Setup',ZGb(d),d.c='basic setup and using custom themes',ZGb(d),d)),XAb(c,(e=new qHb,XAb(e,(j=new CHb(Zrc(a.b).b),k=Z1((Hab(),j.db)),W1(a.c),k.c?Pq(k.c,k.b,k.d):a2(k.b),BHb(j,(n=new HEb(3),n.c=QJc,FEb(n),n),W1(a.c)),j)),XAb(e,(o=new tHb,XAb(o,new vFb((p=new Htb,So(p.b,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new Z_(p.b.b)).b)),XAb(o,(q=new kyc,eIb(q,(r=new Htb,So(r.b,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new Z_(r.b.b)).b),A2(q.db,TJc,true),q)),o)),e)),XAb(c,(f=new qHb,XAb(f,(s=new CHb(_rc(a.d).b),t=Z1(s.db),W1(a.e),t.c?Pq(t.c,t.b,t.d):a2(t.b),BHb(s,(u=new HEb(3),u.c='Bootstrap2 Look-a-like Setup',FEb(u),u),W1(a.e)),s)),XAb(f,(v=new tHb,XAb(v,new vFb((w=new Htb,So(w.b,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new Z_(w.b.b)).b)),XAb(v,(A=new kyc,eIb(A,(B=new Htb,So(B.b,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new Z_(B.b.b)).b),A2(A.db,TJc,true),A)),v)),f)),XAb(c,(g=new qHb,XAb(g,(C=new CHb(asc(a.f).b),D=Z1(C.db),W1(a.g),D.c?Pq(D.c,D.b,D.d):a2(D.b),BHb(C,(F=new HEb(3),F.c='Custom Theme',FEb(F),F),W1(a.g)),C)),XAb(g,(G=new tHb,XAb(G,new vFb((H=new Htb,So(H.b,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new Z_(H.b.b)).b)),XAb(G,(I=new kyc,eIb(I,(J=new Htb,So(J.b,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new Z_(J.b.b)).b),A2(I.db,TJc,true),I)),G)),g)),XAb(c,(i=new qHb,XAb(i,(K=new CHb($rc(a.i).b),L=Z1(K.db),W1(a.j),L.c?Pq(L.c,L.b,L.d):a2(L.b),BHb(K,(M=new HEb(3),M.c='Support for IE8',FEb(M),M),W1(a.j)),K)),XAb(i,(N=new tHb,XAb(N,new vFb((O=new Htb,So(O.b,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new Z_(O.b.b)).b)),XAb(N,(P=new kyc,eIb(P,(Q=new Htb,So(Q.b,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new Z_(Q.b.b)).b),A2(P.db,TJc,true),P)),N)),i)),c));return b}
U$(1307,529,cEc,Krc);U$(1310,534,dEc,Trc);U$(1311,1,{},Vrc);U$(1312,1,{},Yrc);U$(1318,1,EEc);_.Fb=function zsc(){$ob(this.c,isc(this.b.b))};var lW=Urb(jJc,'SetupPresenter',1307),oW=Urb(jJc,'SetupView',1310),nW=Urb(jJc,'SetupView_BinderImpl',1311),mW=Urb(jJc,'SetupView_BinderImpl$Widgets',1312);LEc(pn)(37);