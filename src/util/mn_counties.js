var sw = new GLatLng(43.499355999999999, -97.239209000000002);
var ne = new GLatLng(49.384357999999999, -89.489226000000002);
var bounds = new GLatLngBounds(sw, ne);
var mapZoomLevel = map.getBoundsZoomLevel(bounds);
var mapCenter = new GLatLng(46.441857, -93.3642175)
map.setCenter(mapCenter, mapZoomLevel);

var polygon1 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ecllHlswcQ_GEtGgR~MaBfMwZC{Tlv@{~AfQgaAf@qf@lG_[xG_MfNipArp@gcEVkw@}SqyEamAm~CfFkzAiNchBlHm`@rrBwjGlI_Mt~AsqDnw@ivCPqkBfRa`C|jAlq@|yAjD~rNmmD`fBv@~eMspCrYgE`bCwnCpnRA?obEltUe_F`gAdFnT|r@v_@{LdAKh}@nP~qA_m@jZ`fAvWt]xm@nMf}Aey@|y@fEb`AkIpeAmTpLiQbh@s}A~Rub@lc@_k@hZ{r@bd@gh@?xEbE}Eh]KpQwYvVggCfa@}s@bUex@xXqa@p\\g]zJeW|KktBgCimAtHii@lNeUjy@sk@zHg`@y@{s@lFiaBtLcu@VstApFysAjGys@bR}jA{Ayb@kKkp@ae@us@z]YvYLxg@?~k@UbgC@pzEkBnsA@|BS|r@qA~TMtU?p}HtEpqDt@fk@c@v]BlsCc@thCcBzaAHzXH`wAAjl@MhsDeAhgC}A@roXn@bmXNp~ChAhlu@l@nbLD|gDLhv@LtOJhgE?~uAf@txKalG\\oxAtCmhAkA{lBcAyk@@orK~A{r@`@kl@`@IheAPllK[dsE]bgCyaJLau@[sS@siDYc_@Fu{LYmAoEByiBa@egIAojDFokEVcqLYqr@HonFMwa@il@DmxDkAik@fA{s@FgFLshE^_EDy@FgwANsiJzBgyAZyqAHiFZoyBC~AtHbPrYvF`BfVtb@hc@r`AbIvCvHtJ~u@bgC`O~~@v@jsArJnr@`\\`qDdDzoAdIrx@`Hxb@n@j[gDfiA_Gtl@mEz[wLdV_G|]cBhFu[t|@iFfDcKjYiIjs@cXlT_EbUPnR{FhNwFuEiFyDiEuDiBw@qGhZgOlOiDhJ_PhXyY~QsoAdw@mItB{c@L_E{DyD_WcUoW{D_k@cD~CqBbN_B?hGwX`JtB_BcHgFqCqFEiKhHkCtJq@~PfEbHmDvPcH`Oqg@~PkD?mMsFiJEcQlGkTtTmItB}y@hE_[iHur@{^iFEkMxFqFxN[u``@kic@qA}uKV{zIQ}KCoCBoyEIs@JabAJyfAOiJMyGFivAH",
     levels: "PEFFEFGEEDEDJEGHFJEFDFHFMGIGIDIIJJJHHAFGIEGIGFEMDDFEHFEEFIHEFDEHEEHEFJEEEDFDHDGLBAAACBDAC@FCEBACD@BACBOB@ACAB@A?ALDDBE@C?LAC@NBA?BALDAD?@BBAMBDBACB?AA?BBCLDDEDEDGIEFDEECDKEBGDE@EDFFFDEI@@BGEDCG@DMEGEFGDDFFGEDIDFEFDGICDFEFDGEGDEKLCB???BABAB@P",
     color: "#0000ff",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#0000ff",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon1);

var polygon2 = new GPolygon.fromEncoded({
  polylines: [
    {points: "gmajHn`mpQjC_fy@?useBzc@\\rtAFpdPi@flBcAlxCaAvrMOptDjCb{A}AdzAVAklBdxAiDve@xDbdFrBd_@uAxu@d@|p@p@tj@o@|jBpE`hAb@nyAuDduDUvxAy@t@liCbApnGn@bcFL|k@s@j`CjAjyCMrOq@zdC_@x|JDdoG?dhCLfhCAlnGRvgCb@tqXwDnlXz@pkULvi@eQmAoG{B}EuFcKu^GuM}EeEaIo@cLxI}ElNaIpJoGbBuWYsJuFuIac@_MsKcL{BiRWsJrCeOVmHeGuA{TsD}FsGsCik@iGaJ`CoKrImNq@oGmDaIiKgYgOiRkDkKjDoQsCeEoGWaS{BiHgOsCmNzBcLwFp@yZ{BkDyIsCgLZ}HtIcL?{B{BoGyZtFac@wAyTmFwKoFqE{Ie@a[rGeXdMaIuC_S_Tu]}JcJkGwJkPoMuF{SVwPjKkK_FeFqHqTe@qr@jDyI{BeOuMwFiA}Ep@wF|EuWf}@yw@d{@_PrCyIcL_ZsCqYt^ya@dRcK|KkX|o@wFnGoGbBkKeEkUq@wFbBaLxUeHzBat@Y{Y`VyV~i@cEdEwIn@ef@yVsM?ah@|^gC`GuFbEcEhAuFiAeEcEwS{BkDjDuFlQcErCkUAsMkC_FhE}BpRgFvIiLrByZ^wY|LgH?qJqEaF?qGtCsG|P{Eta@sKvQuIxHiOxGyf@gMcYhSmVVcIuCeJ_\\}EaHoE{A}YjBeW`QyFq@gLsGiS?oVrTs\\nEgL`M_FnRyFdIkHp@}[eIwFbBaFjHgEdPu\\zm@uJlDkOmDoKYqYhL}PwJkZWkHlDmPdv@aJzPmVnLwI]qX}IyOfAuG~IsIt^sMzEmPPmPwI_MNyJ~EmMnc@o[xJq]tAoMlEiRxYuH`@go@cHuO?sHxBcHlEaHp^uFjGeL~@kg@kFym@fAcRyEmSgRsMcT{KuAmOxEsFSuTwM",
     levels: "PDNBCDADDDCIIEEDDACECFDCOA@?DCEACD?AABAEDANEDGDEHEFDFDHEEGCEDGEEDHFDEGCDFDEIDDGEEGDGEEEDHEEFCIDEHDEEDDHEGDFDFDDLDFFGFEHEDFDIDDFEDGHEDGEEHDCGDDDFDDGDGDDGDEFDDHEDEFCJGFHEEDGEFCEIFFDDGDEGDCHECFFEHEDHFDEGDFGDEGEGDDFHDEDGEDIDDGEDGDDFP",
     color: "#61c982",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#61c982",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon2);

var polygon3 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{hajHxdlkQ?s~rAzFynuBCilDCsoBpFyNjMyFhFDtr@z^~ZhH|y@iElIuBjTuTbQmGhJDlMrFjD?pg@_QbHaOlDwPgEcHp@_QjCuJhKiHpFDfFpC~AbHaJuBiGvX~A?pBcNbD_DzD~j@bUnWxD~V~DzDzc@MlIuBroAew@xY_R~OiXhDiJfOmOpGiZhBv@hEtDhFxDvFtEzFiNQoR~DcUbXmThIks@bKkYhFgDt[u|@bBiF~F}]vLeVlE{[~Ful@fDgiAo@k[aHyb@eIsx@eD{oAa\\aqDsJor@w@ksAaO__A_v@cgCwHuJcIwCic@s`AgVub@wFaBcPsY_BuHnyBBhF[xqAIfyA[riJ{BfwAOx@G~DErhE_@fFMzs@Ghk@gAlxDjAhl@ELva@InnFXpr@WbqLGnkE@njD`@dgICxiBlAnEt{LXb_@GriDXrSA`u@ZxaJMb@tgKClf@BzhDW`FfAvfAJx`ATnbAnA~fBp@tgDx@pcGStKZzaBL|e@k@`yBQhS]`qBaApoDKrfDDjfEuAhhCqCppGBpeCBhg@~A``B_@roB?lMuDdlCqBrJoArgKcGj~KcAjiTo@~rCEzbAmBpfESjnCq@tfCGhqGjBvaIDptA?phCVnjGwxAx@euDToyAtDahAc@}jBqEuj@n@}p@q@yu@e@e_@tAcdFsBwe@yDexAhD@jlBezAWc{A|AqtDkCwrMNmxC`AglBbAqdPh@stAG{c@]",
     levels: "PDB?MEDGEGDFEFDCIGDFEFDIDEGFFDDGFEHEDJ@GCDEGB@@IEDFFFDE@EDLBEDGCEEDFIEGDEDEDDLCBB?AA?BCABDBPABB@?DADLAB?ABLB?BDB@BDABA?FAA@DAD@E?CC?FDEDFDACBBECC?ANCDFCECADDEEIICDDDADCBP",
     color: "#c39205",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#c39205",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon3);

var polygon4 = new GPolygon.fromEncoded({
  polylines: [
    {points: "a|fhHflj_QkZ}d@gToP{GqNyC_PpAw|@yGelBZ{[pHqd@~Ve{@jMc`BtCi_A{EoxA}b@}{BpNumBpN{v@p`@qm@`Eu|@xNqWl[cNla@q`@pP}H~_@kBtxAbXtNMn\\oX`A{@bL}SzCiN|EsbApPcy@Zm|@aIi|AtBicAjMkaCrMs_AH{sB|FelAp@{dBmIk~@vLau@kBazAqIg`@i@{a@|MqHvB{WuDyo@xB}x@~Min@\\ge@qM_lCrAcf@~QeaAnLusArAgqAbCcPdP{e@`Hu~@tEsjByDw_AeBeFkIcFeAuPjWuxCdCw{ElCqn@hDiS`H_TjLeRtiAyf@fMyVjIkHd`@cOvs@uHx_Aog@`\\iXvOsFvl@kHzJRjh@rGvc@|Lt_@nRtHb@hUaEvRSvJjEd\\l`@tG~CbJ~AjOwBbUgRxI}QjYmaAvLoXpMsQhBg|@aAuoAy@qt@tCyh@n@cU{LkdAaCu{@dC{s@kCyyAlDoc@zM}t@d@qVuIceBnB}nBuHkeAiEkM{DkIsSgSi_@_P}MuR_FsTl@cN|ZuXzNaXbLga@h@}LaDu\\iDeL}Vsa@gI_WQcg@zLgl@Z{MyMudBh@}{AmFui@cOwr@sHurA_DgSag@s~AcKwsBwNivAgEeLiWw[s\\}N{g@yHo`@hAwi@h\\{qAtY_TaDcFqD}Hi`D}IeZ_\\kc@qHwP{YsfAqPea@yDqSAsE~ImB`Vg\\vBuWoJceAJanAcKyT{F_Cua@q]zKyb@b@gEwC}FkEsDqMSux@gXgHuDi@cC_dBebQ|@sgHbwAspCn^od@}H_~EuOkpItaE~FluH|BzcH|@|sOdIr_@lFfuMbErmOnChm@gAFxPpiKoB~[DttBq@lsAdAlmIeAlbCoAS{m@|xJe@hPiAnjAmDbj@`C~l@JCcn@j}EtBjnAPtfAQtwCWlMGsEbrGn@l`Cw@vzBQrIiGdin@o@|oEmAppCqRnxS`AnqCxAlbXqGRi@t|HbaBd@fp@p@h~@ZvtBYqAlqPkAzzFq@zvKf@|}K|B`xORvcGvA~bNXtUKzSOpLGbbBBn@Nh}B_A~sMhBnuIcuDJogEcD{i@Mg\\DwxAUam@LwdIKocAUueBj@@pc@gqINcNa@g}AeAuxA?{rD^MmB_iCGgAa@qyVxKsfPfF?hQigC|AisDdAkl@LawA@{XI{aAIuhCbBmsCb@w]Cgk@b@qqDu@q}HuEuU?_UL}r@pA}BRosAAqzEjBcgCA_l@Tyg@?wYM{]X",
     levels: "PEEDHEDGDFDHFGJFFFIEDHFDG?IDFEJEFDEFDDFFGEEGFDEFGDHEEFFDEHFFDEGFEDLDFFDGEFEDJDFDEGDDGDDFDIFDEDLDAEBFEFEFDDGEIDGDEFDIEEFDIDEDGEDFEHDEDFFDKDGEHFFGDJHEDFDDHEEFGEHECGEDHDECIBKIEIBNEBDEFCDGGAADDIHHEBECHHBD@@PEDACAFCECFFJAACKBBECBBBD@BA@BDODBDAAABCGHDBCADDCGCGGG?CA@CCABECAEBADBCAAABP",
     color: "#255a88",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#255a88",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon4);

var polygon5 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ocigHnudwPgjHwBuaE_GbWueSoo@a{DvEw\\liCw@tGk}B~`A}yBvGk~ArzIop_@qj@ouLdTmnCl`Ckk@zWcL~Be@xRxEtCu@rBqFXj@b\\zb@b@B~F`AhHsM~JyJlNhThHxd@_Bb`AyIfj@v^bm@sEpqC~OfvAl_AlNxfAxp@dP{Bxl@nWpvBqxCbVoyCvTil@wXmuN_j@eoFyBkjCvAsn@pwAa~AbTaQ|C}^lDmK~KwFvF|@|g@ya@t[kwBtpAJpvDf~Bp{Boi@njCqdB~uAqlA~b@sTx\\kc@mCiR~FwPlw@e|@tcB{z@huAsw@b^cWhl@_[hXcMxNtEhLwDpAwCcByNbJ~AtLEvMmFbOoY~MsBbORhFkB~c@{^pTuUiOgk@qm@wv@wE_XwEyp@yKcJiDeOb@_HdG}IBwGwRkj@u@gUcSgk@kVcsE{WscAct@vW{u@bgBwd@bYg]uHc@zKqHxBq`Adc@qnBij@m}@rhAyg@{IcEex@_vBcg@siA_fDxb@suFtEwRzQuO_Bs~@cGf@wDnCqYgXlIav@lIiCTyBmSw}AgT~AcKsHyd@}}A{M_jBpz@cHlHy_ItCsu@mZua@mGchAlA_dAt_Ach@~DeQhLsBpKrNjw@yEvHgv@~l@yi@|Zc_EvtCfoAh~@uD~i@c]n|AeCp_@miBplAyu@bCcS~CMzBn@zEcDP{EqRu\\qIgCoEtLcO}C{BsHFuaAvJa_@~AGbJuBfMuIbPTtIfa@~RT|RpGtSqG@oZ`AcLvLke@_@wSyGaFwL}ScI}r@uDor@iLm^hCcr@pE_IP}LaCk_Ax_Ayu@lr@ahBjjA{T_I_sBiEwf@_@s^bBeNgNgdBfRcGpO_a@vRkbAlsIbAnbDSpoFhIlhN@jqDiE|lDkFtyCWj`@Idk@mEfn@hFx}EhCbeF~G`sDG~yLuDfbB{DjnDqN~uAs@|q@hAhr@eF~tBsEvx@iC|nGuMhk@mG`fCeApbAwDjsHbH||VhFbNT?~Ft`PjAr|OV`q@H|xK^hCoC|nAi@DfNvkEw@taCU~V?ndCnCll@Lz_FsAnoAE~{BFvSSvrAOjd@noAxg@`wBJ|u@~Jpg@jhBbzDlOtiApyAhpCfm@bt@~gBnlFvkBrgEbcAroAh^j_BtsCf{Gzc@~Rr{@~tCrg@~p@vwAgc@foDwsCfwE{pFhZs`AdNf^s]rtA}zFzyIRzsBbBns@zw@bdCr]v`@rg@TbQcLby@f^~C~M_Drg@_XrjAzOvj@bBv[_Dv~@bG~Mf^fJnUrXrIfYzJjRjHfEfYcBvL{h@rDg_BfTo_@~HwGjWoAbQjH~RvVbGve@vLr]rg@vj@rSv[vLvGfc@sSjMwB~HjCjR~\\nKb`@R~WoPjk@{@f^bQjk@~Cbj@kz@bwA~HjRbe@jf@z@v[cLvLw[~HoFrXg@n_@kHrNsNrDc[z@_DjWbLrDnP?sNr]oF~Wk_AMmtBn@i}@Nom@Xsl@?_oETk~@CsDbaCL~gGHdnAUvHb@xNJtzA@~gEqC~bCHlhDJj@c@vgBa@fvBwAjrEExr@wBriO_Nz}BRhfCbGjiInHnvMFv~A^fzTyCdnKbAhaKm}OwK{cJsFcuDaBu}OmJ{dOn@Gz}@chJoCu[AuOS}eCDorD`@kDC_hChAygABox@u@{yALcl@z@{yA{@yISanD}DwwDK_o@DElKySpBya@hEgIbA}VfBsg@j@gEf@sxA_@{bCYsm@a@opBVeSQmeBkJmSYukCaLwtDiE_\\l@cHF_\\i@qEL{Oo@yD@}sDMqo@{Eag@VqSS_HJi\\Fa~BlH{aB}Do~BqBwF@ga@[aoBuA{oBkBstCoBg@xaCam@v@_o@Rw}EdDwz@Us_DdCeaBLyaGeNkKa@iz@iBkwBz@uwCVufAPknAQk}EuBBbn@_m@Kcj@aCojAlDiPhA}xJd@Rzm@mbCnAmmIdAmsAeAutBp@_\\EqiKnBGyPim@fAsmOoCguMcEs_@mF}sOeI{cH}@eJE",
     levels: "PDKHLGIGGGJGMDBGFDF@E@GCJEGEGGFJFFFLHFJGFDJDGDGDEHLHIJEEHFEFHDDCFEEGDFCFEFDDFCLFFDFEHDDFEDFFKGHGFFCJHIGGKIGEFHCFHEDGHEGFLHDGGEIFHFFIGGKHFFJHFECDIDGFFEHEIBDEGGDFJCEEGDFDEGEECIGHIDEDEHFEOCEEGBE?EFEDFCHCEDFDBBEEDHEFEFBA@EEFFA?EBDC@BAMEGEGGHEGGFGFGGFLGHGPGHICKFIFGIEFGFDHEFFDJEGEHDFJEFDGDHFDGEJEFEGEHHEFKEGDEGDHGDGDJB@@B@@LE@BBC@EDAC?AC@FGCBF?DDOCBAFHHAAEA@CCBBCEBAD@GF?ABDBH@BCBFCBEF@CBBC?EDBFACFDA@?AAIJBACCCFA@FB@DBIHCEBEHJCDDAAGGDCEED?P",
     color: "#87230b",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#87230b",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon5);

var polygon6 = new GPolygon.fromEncoded({
  polylines: [
    {points: "kihgHjlyjQkBwaIFiqGp@ufCRknClBqfED{bAn@_sCbAkiTbGk~KnAsgKpBsJtDelC?mM^soB_Ba`BCig@CqeCpCqpGtAihCEkfEJsfD`AqoD\\aqBLuO`h@oFthEQ?FbcAP|VZjcA~@hj@b@lBP|zAZ`oG`FxtAGh{BiEzy@W?gFIan@tuI_AvvDpAt|@d@t`@LnJFniAf@prD?p{HSKjlCRryQ[z|@nAbfCIndCxB`vKrAjo\\wArtK`Af`KwG`}DkA|xEbFxn@vApKW`tCEvaAmBhgCgE|y@m@lK{DhbAdAdkKj@xfCwCdeCrB`gAc@zwKxAfcADNL`tGpA`eTDrfCt@ndTFtcCAreCl@|eT_@reCj@vmL[rsFJvmGm@dfC^|mG?hiBcD{A_OaQkFqCeG]oOfA}DzEeBpIuGtGeHj@kg@o\\yEw@{WeSu_@`FoJiAqHmEgGwQiQgAcLlO}OnAoK}L}JD}IpAaD|JuG|BsK{AqEuG}J{@sDz@oFxQqJjHmOvAyFeHoIcXuG]oTvQaO\\wFqCwUw[mBiXqE{GqJiCsE~@qKfI{Gz@aE]aL_MqK?aKxG{A~MuC`EwHOwIyHeFy]_D}Fqs@}m@{H\\_MhEah@tZgJ|RDxJsEdIeQj@sJyAcDkG]uWeCcDyHyAgBj@oMfW_a@?qE`EyGxV_F`EgPfBwPuCsFyAaE{GoP{L}Ma@wE`AeFrTPxNeDjEoONgYaQiYcDwGrBsTre@_QrBsReEwG`A{GtKwE`Xw`@fWak@?aJmAyHcEaEmLkQoLef@gKaJ?_JzCoLdPcPxHa`@lAqGmAyHsGmLgVs]}Y}N{Cy^rBwXdP{CtXePlAcE{CwHy^uMsGoL?qHzLmNnGiHVeOiRyIuFsTuCmNlDwFzLsChA{S?gHyBaSsTiYeEsTVuFfHyPbn@{LnGqQdEyZiAcEyIaI{ByInGeErJgOhAoG_FeJiU}HkEiq@qAmNfHwP`d@sJnGqJbBw`Cz]u^}EiRwPkKq@eO`I}LrT}L|b@wNhTMwi@{@qkUvDolXc@uqXSwgC@mnGMghC?ehCEeoG^y|Jp@{dCLsOkAkyCr@k`CM}k@o@ccFcAqnGu@miCWojG?qhCEqtA",
     levels: "PCEBBCADFDEDF?CC?E@DAC@@MEE@B?@ACCFDCH?GDA@@?D@OABDCCDDDFDFBG?CF?BFAEFDD@DAE@A@ACCBBCCAOCECGEDEDGDCFDGEFHFEEFEDGEDGDEFGDGEEIDFEDHCDFDEGEDEHEDFJCEGDDHDGDFDHCFFDDHDFDDEGEDDHEEHEGDDGDFICGDDFHDEDFHDEEEHFFFHDEHEEDGDGFEDFGDFDJDFDHEDGDEGDDGHEFDHGEEHEDDNADEABAA?DCAECD?@ACA?P",
     color: "#e8eb8e",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#e8eb8e",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon6);

var polygon7 = new GPolygon.fromEncoded({
  polylines: [
    {points: "knggHvixdQZesEQmlKHieAjl@a@zr@a@nrK_Bxk@AzlBbAlhAjAnxAuC`lG]g@uxK?_vAKigEMuOMiv@E}gDm@obLiAilu@Oq~Co@cmXA}aYrfPgFpyVyKfA`@~hCFLlBzrD_@txA?f}AdAbN`@fqIOAqc@teBk@ncATvdIJ`m@MvxATf\\Ezi@LngEbDbuDKplI~@npE`@beCh@fkCKrkG{DHwEfxA@fkBu@ZEpWKhhGcBrNmEn]iE`aAzA|oBy@`}AnClcFeCjf@b@?dEliBnAlTLt`@aAhhCjA|HGz[ZzE?zcBiBhhB|BA|lKbE`{Ki@|{ErDr{BR`fDApcCXjb@g@z~AbBhoDTx{BuDhfGLfOfCzcF?ld@KjNDzLiAdkIeAtxEEvb@IbIYzKw@z_@qChvAp@~fCFrh@Alo@L|kBDzgEgBlsF?pUe@j}IaDztAF`iJs~B{@ujCPul@vAqzA}@chCbA_eDhBcKMePNui@J{nHdC_n@Q}}L\\qq@b@Mfy@o_Pk@{aEnAsgAkBa_Hq@ipCByPzqCcOjgA}\\bhBgS~e@iYhd@qq@pr@}oA~l@qYdImpAjQug@Su{@gFgeAgOqNeFqCkAuIcAy_B}r@yqCuqAmXsQgi@if@_UsZiOmZ_RqTwBnadA?~z@sgEg@ovI`DmwKfCq{HRqrD?oiAg@oJGu`@Mu|@e@wvDqAuuI~@H`n@?fF{y@Vi{BhEytAFaoGaF}zA[mBQij@c@kcA_A}V[ccAQ?GuhEPah@nFBsBj@ayBM}e@[{aBRuKy@qcGq@ugDoA_gBUobAKy`AgAwfAVaFC{hDBmf@c@ugK\\cgC",
     levels: "PBAL?C@EBDDLA?A@BACA@BNCFCDDACBDHHGBAAADBDC@ACGEEC@@AFDFDDEEEE?EDAA@DDPDDDDABCDBGE?BEAAA@E@??E@C@@EC?DDNCDCDABB@@DBBHHDDDBKEGEJEHFDKDFD@CHCHDFDDM?NDBE@D?@@ADH?HCDFCCA@?B@EEM?C?ABDBB@CDB?BBP",
     color: "#4ab411",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#4ab411",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon7);

var polygon8 = new GPolygon.fromEncoded({
  polylines: [
    {points: "}xbeHpsrjPBc@cIcm@_NsH}a@a_AgLsw@gNnDehBoiDg`AccImCg~@ai@}q@ys@mdCh`@cXtOuf@mAeq@ef@gzBlDiVjXyZ~\\wGbg@vKtBg@lF_KpDiArqCmNjsAiCbhAlL~RiVcTig@qXoCqM|@cFy[pKiJpRaISek@lJcg@fzA}TbWsXqH_bA}QsNwCeLpD}SvJgIt_@vFxp@fBbSlo@jd@zcAlOfFpGsOGcHk@aUjCyLpD_DhB?|Cr@pQtMvLmPbDyUjPsh@bIgCr@a@xS{I~@EpEoFzDiWff@iHp~@{d@pJLvl@s}@sUa~@{GikFe[yiBwQkxGas@}zAI{g@wBeYuT}{@{Hm|A{LoDcXgs@[oMpOuPhAgFwB{`@_FiZzDui@z[oTd~@~uAbc@gM~MsRhP}m@gTowFrKwe@qJaPqAsOjDky@cCeBcAo@qH_IjMoWMoP_GeVyIeR_TsO{Bkh@cPsS^{LbGiMtM{dAxH_\\zPoWlJk^kf@snDMqk@v\\}{@x@sSrJmVxMcDvFkExGoM~Leo@u@kHcN{C{Dy[wAcvAtD}j@cAiN{BuCiBmByBc[iU{FkOok@wGeoAmHg]d@ei@fOcn@bTy\\Z}WuY{zAGi{@rEodAe]m|BuE{w@fIyr@l@c^eLceBvAag@c[mjA~OklAkBksAqGka@iEcHdBin@hAeUxS_XpCgUpBmFpHaGbGuf@aA{xCzT_nBx\\mdBf\\}t@~@oTrVubB~Pud@dnAw\\h]sVqCeY{DiDzAyHtbAeaAjt@eXbm@pL`f@lCb\\sKpMgIbP}Xb@_IqC_LZoD`Owk@tRkVtc@k_@_@y\\pRov@mZcXv@scBjNiHhPkA|LuJvr@}w@j^if@~HqXfEeg@vBgGbQmShFsP`GacASkc@dEkm@iBwKuWiR}Ns_Cu@iGm\\cUsW[sBJyA?kAwAYeBhCuQzO_\\T{LoD_Hi`Auo@qWeLuAgCiLglA~R}Gp@yEqC{k@iAqHgMeEcBeEmB{MhAgx@iBmSySga@}Fk}@gAqzAbF}^xLgFZ_BmBmT{DgMzHwa@~DYi@ok@_@}AqEjBw@}D~@_EvLiF|AhBK`HtEbGpPu@wCgP}JwKeDkLpCeEte@z@hEeB{C_P[o^~BsEpHkElIcUTyEq[omAZ{MhDeBEqEyAe_@_EaQw@kRrB{JxCw@pJ_MpDaM_BmM}O_IbCoe@bN{FhQeObEkLm@qK_GuFuE{Mz@{WbKeIb@oJ_AoCgDSuI~AmH~EcF_IyLqjAxC}[g@eO{GyIqRiKuKqNs@gGzE_EfYqDhRrFtP{JfJqe@tAej@tN}b@bKwQhUgWrA}EiLq_Au]}f@mgActMdy@tNzPpUlz@r_Hra@t}@`h@rGxc@~Kpn@bkBnEnbBi]xn@q{@``BcNbqAnRll@`h@l_@ra@lRrq@w@ta@wHfCzFzMtbC`}@ffFfcBtgEbk@xo@|dAjcCv`BrxEnkBrxJg@bmBxjAldIbZ~k@bj@ySjXzf@pdBn{Fbx@luFxVntDjg@zuDbTj@rZtS}@ni@pBfc@zn@~qDcAn~AfQlrD|f@hoBvr@nv@bKlbGlTxyBttAveHdNz_AKrn@dQhz@~Ppi@d[dN~_@tmItPln@nRfkDbU`eBp_@fYf^xeBtqBbkN|nAtwAnz@jqEpxC~gKrmA|oFhwBrtHndLbzXduCdtFzOlOvW_AjUvZxP`_@zCvt@|ZjdA|tHnlOmlIeBwiOl@qnCyBgyEEkvAnBitGaFywECcGGqqV_A{pAmBw@bc@coGB{tJuJadMG?vj@mmJvAqyD}@kfDpCyw@oC",
     levels: "PAFEFGFIEHFHFHFKEFHFDDFDFJGGDFIDGEHFIFEFJFDHDFJE@DGDBEGEDFB@BFDHEEGLFFFHGDEFGFEJDGDEIHIGEJFFEFF?BFEHDFFFIDDDFEHEHEEFEDFJEFGDDG@EFFGEHFEEHFDGEGDGEFGGFDKBFEEDFGFGFEDEJEHDEGHGDGDJFDCEGDHEGGIDEFCGDFDDLDCEHGBHFA@DHCEDHDDCIFGCGEDFDDFFJFFCFDFEFEDEHDFDDFHDDHEDHDFCDHDFDDECDHDDDGEFGDEIDDFEEGDEDFGEDGDEDIDFEHEGEDDJFGPFHIGDHJH@GIGDHEFJFIFFFIGGIGGHJFFHEHDFGEHGHFHFEEGFHFFEHGGKHFEEIHGFFHEFGODDDDEEA@DHHEEGHDDEP",
     color: "#ac7c94",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#ac7c94",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon8);

var polygon9 = new GPolygon.fromEncoded({
  polylines: [
    {points: "}~beHbmsjPC}@bBuC~A}Qxw@nCjfDqCpyD|@lmJwA?wj@`dMFztJtJboGCv@cc@zpAlBpqV~@bGFxwEBhtG`FjvAoBfyEDpnCxBviOm@llIdB|h@d|@tIjnAnlDlgE~{A`{B~K`u@dkA~gCxd@pRrjA`aBpOvz@lmAnsArbDbtBbcAdlBhvCpiEnyA|fA~dAdlAc@lTrMt\\xdAbnBpgDriFlcD|lDbd@vWzv@leBt`AdoAbTlfAnhAd~BvgDtnEnd@x]hsAl~BhRl_CpXxw@v_AvhAxpBzvItcCpmBz_@bz@VzWtXlr@vx@htApz@r_A`vAfm@`l@~`Bd^|e@pw@pmF|jCxiEbaEfzF|c@bTre@brAwrANwSR_|BGooAD{_FrAml@ModCoC_W?uaCTwkEv@EgN}nAh@iCnC}xK_@aq@Is|OWu`PkA?_GcNU}|ViFksHcHqbAvDafCdAik@lG}nGtMwx@hC_uBrEir@dF}q@iA_vAr@knDpNgbBzD_zLtDasDFceF_Hy}EiCgn@iFek@lEk`@HuyCV}lDjFkqDhEmhNAqoFiIobDRmsIcAF_@~@if@dd@mPX_QcX}]]efBuD_HqSwMo@oY|V{OtMk]lAsXeC_Rq`@jA~@qTn^qtCv_@sZ|\\zE~H`Dhl@dw@~JfF~n@pKtGcG{N{b@uD_r@bKmXbdAi@xd@lL~D|Ftl@_^zBuJHwMxDqDlLu@f|@hJlj@~X|JtWbe@xXhFt@fEeBhF{s@sPwaAyFiGwIhDkPoz@jZ~Dvd@zVjU_i@hDeX{Eo`@@}WjGoMqJeLkOyAqOsy@pAsEbEsBzRdK~mAwrAc^wzCs@kcDcZ{pA_JsfBx_@mf@l{@zgB`hDxb@fw@kNbt@rOv^ss@uz@syCo{AuoI`GuoCuKy}AxGmVhYlBfdAmw@hLzCpCaG~Bsp@u]saBgUcmCkr@{gAwXut@hNyb@o\\kzAuHy_AtMoTzF[x@}W_B}NyCcG_DiDqFkReDa~@~A}PQox@uDqlAk[axAm@}z@q`@sdB_iA{}AmVqu@mSshAehCwtCrOkl@kU{j@szAo|Bgu@yqBuJrBuA`@yIvDuH?}EeDq[yrBmI_LyWkR{Mkd@_PucAeKgb@qYeUgTid@bA{HbFuCLu\\qKe~@_XmOuMuf@_I}oAu@oo@",
     levels: "PBCGEDDHHEEHHD@AEEDDDDNGHEGFGFGIFHEGFIEFGHFHFFFGFJGFGGIHEEFHFIFGIEGGPAB@CDBE?AFFEE@ABFEFEHDEEBBDFDECHCFDEFE?EBGEECO@GFHFGDFHEGDGHDKFHDGDIFEFIFEHFCFDIGFFEDKGFEFIEIEFDFHEFIDFGIFFFKHHIFHLFIFIFFFHDJFGEHGEGEFGDBDFDDEFFKGFEHHGHFH@CEDIGDFDDGEHDEGFFGDP",
     color: "#0e4517",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#0e4517",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon9);

var polygon10 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ub`eHfdwjQe@c_FzDibAl@mKfE}y@lBigCDwaAVatCwAqKcFyn@jA}xEvGa}DaAg`KvAstKsAko\\yBavKHodCoAcfCZ{|@SsyQJklClwKgCnvIaDrgEf@?_{@|xAk@xe@u@bmC^hmGoAOheCs@~cCoBjcEDze@aEldHc_@`@gb@JgPJ{o@Juk@Mi@vxMClkEDl|BYllGzAvwMy@p_ArBnlGDxgCApIj@xzBP~eCc@h~B|BrvDLheJh@diAC`@NzzHKvmGuBhpKHzsCDneKQloBK`_DyeBDeXCuaFG{GGElqBcjGAsdCEanCTwwK_@MatGEOyAgcAb@{wKsBagAvCeeCk@yfC_@akD",
     levels: "PFB?EF?EBFDFDDDCCDBAMBDHHBCCOBABCJA?BAJA@ADCED?BACDDBB@ECD@B@MA?@II?BBLD@DDDEAP",
     color: "#700d9a",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#700d9a",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon10);

var polygon11 = new GPolygon.fromEncoded({
  polylines: [
    {points: "az_eHbeonQ^seCm@}eT@seCGucCu@odTEsfCqAaeTvwK^`nCUrdCDbjG@DmqBzGFtaFFdXBj{GIhpN_Bnm@a@c@meAQa{AFcgCC{[~Au~MlnGkB~gCg@xdCu@Tuz@`BewJJwhJPmbCcAo}SBceCsAokM[{qE@ghCg@scALk}Qi`DcBeoH^{c@ReSEoWFoAouSJwfCsxANmzAvAc`FHajC_@`EmdHE{e@nBkcEr@_dCNieC`r@Sxg@EtaMoErSc@jyA[dwFaCttDHd{AyBpyA}@ljDw@z|DECa~CtcD`BtfA{AvSIrMLfsDNxoBDdcARjjEb@|bAGl{@g@buB|B?|RTzkAtBj_F^hcDf@v}PHlAI|~J_@n{BCpjGRbdCj@vmJFv]Mdc@QpnKAjeCJrkGeAdoKGrnKDtsFEzyCAdmK|AlcXGraXq@zxG|ChgK_@~`CHvIs@jqZoADaKdH_OEkQm@uEeGcFkAqEjAkG~G}Mv@mBrCiBpYcEpQuGjJ_R|@u[pPqE?wIeIuGwM_BqJgg@kc@kGlAcFhGkJx@cOcLiJkAeCd@cInKeFf@kDmAqH}JoKqBcLjGkKdQsKpEeFR}JyIeIqByCjA_B~GkJ~AqEmA_BcLsNsQeIlAkGjJ}M~AkVkRc|@kKwLdCkSjPsHy@qBkGsEy@}J~DyElJ}G`G_XaLeNxBqKpIyGrRgHzrA_FnA{KeRqCqA_Bv@cFfa@uGrRuoAbQa^re@_GqAkEyU_EkIul@_BcFdB_QnXic@~ByO{J{JYgQtH{LrN{KRuNvLsA|SkF`H_{AlOcGtDiD`HHzFpMjMtCfKm@pI_DbEuIn@cP_QcFbAwLnL_S~IuFfGv@vDsDfHgF?aGgDuLxA_E~BcNz[qKh@cKeBuLrBoItR_IM}O_XmGwDmDrB_Zdd@c`@ha@kP|L{HdBuF{@_RcV{JaDuR?kMlB_L~^kBx@wHs@_DwHiHFeH|P_KjM{LrBgLqHcWdMui@``A_E`k@qUY{Tz`@z@lN_BvDcHDwMkJyGiK_HuYeDMqE~BcOlb@yOzN_Edb@hAxJwAtHyF|DiKPmXnZkFtBsHk@uHyKyI}DiXhNu\\`AmEuBgAaDaP?yFvMoDtBoVmBal@~]w@ff@yVh`@_HqAuFoHq}@xA_[hGuKxLeAvG}OvVcGz@wBsNkHgJcGrDkHbQwG~iAgEjWwGzJgE?{JgY_IgEgJvGgJ~WwLnKgOoAcQgc@cGg@kWnd@kRgE_NwVsIRkRjWcQ~C{@wGbL_SjCkRkHwLkRz@oPzJoPrg@wLsb@sI{@wo@jiAgObe@kR~HsSgJoPbB{EjRwBfc@kMbe@cQzToPfEsIoA_XgO_NSsN~HaNf^kH~MsDnAwG{@kRcVkHkC{TvLwGg@i_@uOem@mQmMyAoG|AeGtG{Qtl@_OtKadAnNcJmGoJ_NiJt@eCfIgBfZsCpGuLzHiM_Am]iQ}Gu@}vArIkf@nJuR~ImHdIeRhl@eNpXkoAlbAsB~_@wC|GeCh@gHkB_QcTa\\kGsVfAgSxMeGbRyDlA{G[yI_ImILmIxDiKdUs]|EmF`Ku@xI~Cbh@{FlToGzAiHiBmPcLwEwAcITcKnD}l@~_@eQxGed@jFyO~OkJbA_KoBeMrM_Jlk@uGpCeRZwPkKyL_DwLsBqN?gGpCyEjMiMjM{d@rNiQM{IaE?iiB_@}mGl@efCKwmGZssFk@wmL",
     levels: "PCA@C@BMBB?IH@?ADBLAB@DK@@M@CAEACBABDLDAA@KBKCDBKCBABN@ABBADDBDBIJDADA?B@CBDP@BDAAEABC?@CAB@CC@@@DDCDDBANCEFEDFDEHDDEGEIDECEHDDFDFDDGCDGDECGDFDEDGEFEEGFHDFDDFDCGEJEFGEEDGDIGHECHGDGFEIDDEFEGDHDFDFDHEEGDEDDFDDFDFDDFHEDHDECGDEFDHFDGEEGDGEFIFFGEDHEFDFCIEFCDGDEIDFDFFECEHDFFGFHDFEHDDEGDIDFEDJEEHDEHFEHGFGEEHEDFHEGHEJEHFEHDFEIFDEHEDDHDDFEGDDHDEEHGDEHDFDHDDGEJDFDFGDICEEGFEDGDDHEFEGDEIEDECHDDFFEDHEEHEDECHDDFMDGACCBCP",
     color: "#d1d61d",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#d1d61d",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon11);

var polygon12 = new GPolygon.fromEncoded({
  polylines: [
    {points: "m_bdH`pkfQvBoadA~QpThOlZ~TrZfi@hf@lXrQxqCtqAx_B|r@tIbApCjApNdFfeAfOt{@fFtg@RlpAkQpYeI|oA_m@pq@qr@hYid@fS_f@|\\chBbOkgAxP{qChpCC`_Hp@rgAjBzaEoAn_Pj@Lgy@pq@c@|}L]~m@PznHeCti@KdPObKL~dDiBbhCcApzA|@tl@wAtjCQr~Bz@d|A`AvyAf@ls@a@jMuB|}Cm@~C^~e@`@`uAm@vFi_@k@iq@bdEUjD?r@LhNDbGa@~fAL|jDf@n~@yAroGd@lbAeArBIxhETv@xwKDjBrAhcKn@rdCp@nbK`@dwBWdmBk@`sCE~oA}@reAxAt`J?dvAS~}AgdHr@uP?uTS_DMoHM_IFeTD_^XcRnAooFw@k`Lc@qyAJ}tA{@kgJKslPtA?~KJbCcuB}Bm{@f@}bAFkjEc@ecASyoBEgsDOsMMwSHufAzAucDaBB`~C{|DDmjDv@qyA|@e{AxButDIewF`CkyAZsSb@uaMnEyg@Dar@RimGnAcmC_@ye@t@}xAj@",
     levels: "PMDDFDHCHC@DFDKDFHEJEGEKBDDDHHGBD@@BBADDDCAAEDDCBCHEIBA@CC?CDC@DOB@ABAE@ACDCANCAA?D@@CDBBCDCGAFDBC@B?ADADIJBDBDDABBD@?CCBP",
     color: "#339ea0",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#339ea0",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon12);

var polygon13 = new GPolygon.fromEncoded({
  polylines: [
    {points: "qawcH~pahQJccCEm|BBmkEh@wxMtk@Lzo@KfPKfb@Kb_@a@`jC^b`FIlzAwArxAOKvfCnAnuSnWGdSDzc@SdoH_@h`DbBMj}Qf@rcAAfhCZzqErAnkMCbeCbAn}SQlbCKvhJaBdwJUtz@ydCt@_hCf@mnGjB_Bt~MBz[GbgCP`{Ab@leAom@`@ipN~AqtDBJa_DPmoBEoeKI{sCtBipKJwmGO{zHBa@i@eiAMieJ}BsvDb@i~BQ_fCk@yzB@qIEygCsBolGx@q_A{AwwMLihC",
     levels: "PA@BLAB?ACBDCKBK@AADMDBABCAEAC@K@@KD@BANBBL@B@CDA@EBDDCAB?CDCBP",
     color: "#956723",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#956723",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon13);

var polygon14 = new GPolygon.fromEncoded({
  polylines: [
    {points: "iegcHxrj{PcaBe@h@u|HpGSyAmbXaAoqCpRoxSlAqpCn@}oEhGein@PsIv@wzBo@m`CrEcrG|hBs@hz@hBjK`@xaGdNdaBMr_DeCvz@Tv}EeD~n@S`m@w@f@yaCrtCnBzoBjB`oBtAfa@ZvFAn~BpBzaB|D`~BmHh\\G~GKpSR`g@Wpo@zE|sDLxDAzOn@pEM~[h@bHG~[m@vtDhEtkC`LlSXleBjJdSPnpBWrm@`@zbCXrxA^fEg@rg@k@|VgBfIcAxa@iExSqBDmK~n@EvwDJ`nD|DxIRzyAz@bl@{@zyAMnx@t@xgAC~gCiAjDBnrDa@|eCEtORt[@bhJnCF{}@zdOo@PbgF]f`@|EdpMVrxAHrXsFt_KsB`kEuFnwDKxIVjdGu@ptOiEzgUd@~rAc@jq@MjVQhmBdCdeI}@`yCkBl_F_Cf`KqpEiBugAi@ssE_AwyFDe`Fe@ypBGmj@OmJhFfErj@qPlL_D|FiKjn@QlM{Rx]mBbAaEmB}GgBcNlQmEnA_PcFmQ~CgDfDlD~\\m@jGiC~B{LhA_CqOgD}@{EbAcZdXdGa^[wB_NyKsFSyWdG}HkB_KmHaQmZiTgCcBkB_Dsr@P_a@qA_C_DkCwB`A_Qvc@mMjKcBiI~BaIyJ{Lma@_CcGkBmIcl@mCsDcUjGwk@l^qIbc@qA~BmBUcDoEmL{HwL~FqFcAkHyGQkOpBoUnDg`@ak@_AqBbGx@d_@gR`Ns@dJdHpOeJd`@z@|IzL`VsIlLRjJpDrLfInEzDpJcDvEeLi@kB|Aw@fe@lBzDfCm@HGzLwNfDwOvSiElFjC^jFsRjKgCtHqBxTlRpO[hMwQjJoLa@uRlRtPriAeEzUqEwBmFMcBvAqBz]mHScToMiGYqAhIp@tHlOzIl@fYg@xCiDjBgCX_FeC{MnDg@j`@zWhZo_@|{@~C|CdMy@jDp@aDdh@eHhVkD`DeM}HiI}AkNpO{@nIfHhDzNl@fTaAh_@hAt^bIbO~WpXx]~A`K{D`I^zThDlHtRtDvAjC_@dFwGnJcLlC{NyCEhEfBjCtFf@uAdPtBFtBpOqFnD{H`AqHaEuHvF{Gn_@`BnBfCc@jD`@bD`N|DoEjBF`@lNmAh@cAWqAMgPvWlBdDiKdJ_DyAwPz@aGfFm@fH`Lo@fIsF|@fKmP|KsDkC_CuAeKoAmE~KThk@jCfD{QhMmDcBqCvBgs@lgBwRtLqFcLm@sAgQfL{F|ZsA~\\bDnJ`Cn@kCzJq@wBqo@xhBmDtQlCbAlAhFsDte@qE~JgHpGsFdg@gUpG_DqB_ED{EfHyAlUoJpb@m]pNcMhA{GsCyLfHwN|RoLfDmSwAqb@{TcEL_HjG_i@tHyi@r@eMwIkBy[{L_`@qOsNiYnPaCbJwJtY{_@h]mEf@_EtDym@`q@s@dBwr@|{@smCbmAym@|c@iz@~}AkP`nCtyIpcb@j{@`yCm@~]eNbu@oZ~aA_Kfk@yB|x@sJd}@u]h\\UxYlJxIbKXtCrFsAz|@s@`D{Is@cKtEoJnMa@ft@yHnN}ABoEaHoBiYwByE}F|A{RnTqJzNwExNpCnW{E?{[[}HFihCkAu`@`AmTMmiBoA?eEkf@c@mcFdCa}AoC}oBx@aaA{Ao]hEsNlEihGbBqWJ[DgkBt@gxAAIvEskGzDgkCJceCi@opEa@qlI_AiBouI~@_tMOi}BCo@FcbBNqLJ{SYuUwA_cNSwcG}BaxOg@}}Kp@{vKjA{zFpAmqPwtBXi~@[gp@q@",
     levels: "PIFFCECFACADENE@AFCCCABJIAA?@ADFCAFBDE?CBBC@FEBCFBCB@IBDBA?FG@DABECBBCC@AEAAHHOBDB?F@D?FCDCC?BEE@BM?BDB@AJFFDFDFHDBFDFEGEDGDFDGDJFCGDEGDFDHDEBIDEHDEGCGDHEGEDICFFDHD?GMDFFEFGDFEFDDGEDFHD@FDFEHEECGFIEEHGFDCFHDDHDEFGDEDEGGGGDCGHDFDGEJDEDEHDGDEFEEDJEFGCEEEDGCEEGGDCEFDFHC@EEEFDEGFDFGF@DHEDHEDFGF?FHDFDGECFEDEFDEKECGDDGEDFDEIEGDDEHEEFJEBFDDEDBHEGLHFJEEDFDGHFEDGGEDEGEODEDHDCGEI@AADC?EEEEDDGDFA@@CEEGCA@NDB@AB@DBBBCEBBJCAP",
     color: "#f72fa6",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#f72fa6",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon14);

var polygon15 = new GPolygon.fromEncoded({
  polylines: [
    {points: "kv_`HliefQ|tAz@pyAKj`Lb@noFv@bRoA~]YdTE~HGnHL~CLtTRtP?fdHs@G|dBj@~{OjCpcNRrcCIpfAWzZ^hFKlM`@xGGbKf@`kB@`LGlH^bs@Lb`B[bkHaElbHe@bgA[dgAHnqE]p{CPzt@FzmA[lnFW|aAsgB?UA{iAQwiJSqbFk@wu@M}vL`@guDt@etDz@szALyyAFgnGMsxA`@KskG@keCPqnKLec@Gw]k@wmJScdCBqjG^o{BH}~JImAg@w}P_@icDuBk_FU{kA?}RKcC?_LrlPuAjgJJ",
     levels: "PCBBEC@@D?AACMADCBACBBCAA@AAFDB@EBB@CAN@?AB?EC?ACABM@BAC@?CBAEAADB@@ALCP",
     color: "#58f829",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#58f829",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon15);

var polygon16 = new GPolygon.fromEncoded({
  polylines: [
    {points: "kg|`HhtojQD{yCEusFFsnKdAeoKrxAa@fnGLxyAGrzAMdtD{@fuDu@|vLa@vu@LpbFj@viJRziAPT@rgB?HnwBLtoC~AlsOKbxEQduDSjnKWh|Aj@lsE?t{AJ`cCEzsDd@zcAi@l_AM~lGg@|jKF~}BAhgCAfkOr@xgGrC|lPK|e@@zRiAHcRiSeMe`@iC{@uCz@mGfKyCf@kGsBcI}JiMw@qKzM{Ve@}GjDuO`[kGd@_EkA{PoN_Hy@wFx@cFhGeCdL_EpE}J|DkDRoNkG_ERiJhJ}GhVkG|GqHpBwIe@qH}DiPo]}DcCeIhG}DvI_Ex@oKkJqEw@kGd@{SnQuRkDwIx@qEzMkJ~DeF_BoHuReC?wKvI}Nd@uLqHqEuOeFeCuGp@qSn\\_EpBqE?iG_EwL{MwIg@iMdCwOz\\wCjAcIeCeCd@qKdIqEeCqKy@wFpBkAxFeFPiGqBeCwLwIkDqExCyChP}DbC}P}DkLyJiH[ck@xFcd@jO_R_@sfA_dAcO?sVxPmBdG_@vWkDpHa[sBeCwCwFgYwF_E_Ee@oQvCiM}GiM?eFjDkGhMkGd@aUuOiPvCeMzWu_@lTgSbFa^wIeIjDwCbOwFvFkJdF{Vd@cOnQqEe@}DuOkG_EcE|@eGpRqHvIyHwEmAkVqHqKg\\kGcOa[yb@}A}GPcFpEwIhVqKjAuU_EeCf@uOnQePb\\{IOwFdC}Gx\\cXjVcDl@{JaEwCZ_EvMwCdC_H?iGkGwI{ScLkDqH|JkGjAwFe@uRiMkMnHoHw@iSkMeF?kXzKyc@{@gJeEcFSqHpHkGx@kGkAoHeLoQcC_VbPkX|@}JwC}PiScOeFiGx@qKtRkDlA}G?yCsBkDiJuI_BsEd@cIvO}D?eIsB}D}DuUm`@{J^r@kqZIwI^_aC}CigKp@{xGFsaX}AmcX@emK",
     levels: "P@@CMBACA?CE?BA?@N?AD??ADB@ABCC@CA?EAB@OCEGCEDFDEIFEFGCEDGEDECGDDGEEDIDFDHDDFDFDFDFEHDGDEFDDHEDGDDEGEFDDEGDFDDFEDGDDGDDGEIFFIFDDHFDEGDEEFDEGIEEFFGEDFEFGEEDGDIEEFFGCIDGDCFDFDFFFDDFDIEDEGDFDFEEGDFDCFDGDEFEGEDGEDFECEGDDHDEFMABDECDBP",
     color: "#bac0ac",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#bac0ac",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon16);

var polygon17 = new GPolygon.fromEncoded({
  polylines: [
    {points: "crn`Hfk`}Pxm@aq@~DuDlEg@z_@i]vJuY`CcJhYoPpOrNzL~_@jBx[dMvIxi@s@~h@uH~GkGbEMpb@zTlSvAnLgDvN}RxLgHzGrCbMiAl]qNnJqb@xAmUzEgH~DE~CpBfUqGrFeg@fHqGpE_KrDue@mAiFmCcAlDuQpo@yhBp@vBjC{JaCo@cDoJrA_]zF}ZfQgLl@rApFbLvRuLfs@mgBpCwBlDbBzQiMkCgDUik@lE_LdKnA~BtArDjClP}K}@gKgIrFaLn@l@gH`GgFvP{@~CxAhKeJmBeDfPwWpALbAVlAi@a@mNkBG}DnEcDaNkDa@gCb@aBoBzGo_@tHwFpH`EzHaApFoDuBqOuBGtAePuFg@gBkCDiEzNxCbLmCvGoJ^eFwAkCuRuDiDmH_@{TzDaI_BaKqXy]cO_Xu^cIi_@iAgT`A{Nm@gHiDz@oIjNqOhI|AdM|HjDaDdHiV`Deh@kDq@eMx@_D}Cn_@}{@{WiZf@k`@zMoD~EdCfCYhDkBf@yCm@gYmO{Iq@uHpAiIhGXbTnMlHRpB{]bBwAlFLpEvBdE{UuPsiAtRmRnL`@vQkJZiMmRqOpByTfCuHrRkK_@kFmFkCwShEgDvO{LvNIFgCl@mB{Dv@ge@jB}AdLh@bDwE{DqJgIoEqDsLSkJrImL{LaV{@}IdJe`@eHqOr@eJfRaNy@e_@pBcG`k@~@oDf`@qBnUPjOjHxGpFbAvL_GlLzHbDnElBTpA_CpIcc@vk@m^bUkGlCrDlIbl@bGjBla@~BxJzL_C`IbBhIlMkK~Pwc@vBaA~CjCpA~BQ~`@~Crr@bBjBhTfC`QlZ~JlH|HjBxWeGrFR~MxKZvBeG`^bZeXzEcAfD|@~BpOzLiAhC_Cl@kGmD_]fDgDlQ_D~ObFlEoAbNmQ|GfB`ElBlBcAzRy]PmMhKkn@~C}FpPmLgEsj@lJiFlj@NxpBFd`Fd@vyFErsE~@tgAh@ppEhBpt@h@xgCiClvCPbcC~@pOAlsCcAtgJdAp|@z@xgJjBSbsDyAd`R_@dlIB^[`kI|AbbCJbgK}Gl~JQt_@eB|hWb@`b@aBjkIv`@NlKf@ldA`B``Cf@|ZCj|BbA`qCtJjpDhApEChwAPbbAqAbUg@vm@Sv_AEdgABHgyAptAf@bU?veB_ArLa@|KAf`@Xl\\[p|@gA~VMxxAUvrAg@pmAErjAg@|D@jcB[hTHrzFcEfbCwCnB?zm@LlzAi@p_@RzLLvjC|@rh@Lvj@[|v@[npA{@xfJgAfFhGpZvFx[tOyBhPsWvImBnCBbIlGdHhQjHtLU|AkBxCzI~@vQ}InTkHzCeOuJoPcXqGwEmFt@kSdLaZ~Zw[l~@]tI|D~VvKd[BzFsC`FqZtJmj@te@k@pChBtD|QrEzIbKzBrHHjPeCnEgKHwQuYsFWoCpB_I`MiArg@cMxTk\\bByHhLwV~fAqM`y@sBnCmNEkEdEcDxVvDbXYbmAzDzR~P|^aBpGoMdI{BtFn@vP|`@p_@xRtIzB`KlH~^NfKqGjVp@xDbG|DzJRdHhBnD~DzHdWlAtMaGho@zMp_AlTvM~CrFvA`K{B~Vrd@flBmCfc@yFj[cIpMgF~QnA|b@wBrFyJjB{HdFsFhLuEx\\gNrj@ws@tmAaNdv@l@hRcCtTwPlStBxStEbIzShRdB|Ju@zJkDrD{JdDe@lEnGfSs@|CkVfN_i@bj@uIfJoL~NaElUv@rVuj@rz@_Sx\\[xHbB`HnGlJ}AvCyIbEi`@zFoK|FcDfGQ|IfDfJrH~Hfi@xL|EnF~@`^mCjPMxW`Gxv@_OrkB~FrOI~GwEfRcShTyw@nc@sOv@kJcA}YAgTsCsRwIeFqFmTbY~@xPzPzV`ElMClEaJdHyLyBqCdEJnLlG|KxQbFtDxDbAlHmXhr@{y@tP_Gg@yJ~LaElQ\\lUbPmApGhCrAnDm@zNkKzWugADaKt@qp@aAY`AgB{@eC?ojDUidABwoG]svBjAq~C~@aXBq_@G_\\JktDx@{mFbBw^X?|_@myAf@m_MzB_D@_xAlAuq@A{NSg\\NmDHknAa@cuD\\_{AGRuyD@wmA_@edCJsCNoZDoPf@ooAFgbCh@eeC}yAU_oGc@e{AH{xAo@qxAqB{zACmfBDiDGm~@?un@DwhCeBB|_@wiHp@up@XqPGoRc@k{C?y{CwBinGlCqm@?gzCWkbMo@am@Mci@?_uDdAsqD]wb@Dgt@EIto@suBSayCw@s_ACqXk@iDD_SScCGgq@WyfBoAf@{~AYkb@@qcCSafDsDs{Bh@}{EcEa{K@}lKihB}B{cBhBqCoWvEyNpJ{NzRoT|F}AvBxEnBhYnE`H|ACxHoN`@gt@nJoMbKuEzIr@r@aDrA{|@uCsFcKYmJyITyYt]i\\rJe}@xB}x@~Jgk@nZ_bAdNcu@l@_^k{@ayCuyIqcb@jPanChz@_~Axm@}c@rmCcmAvr@}{@r@eB",
     levels: "PEDDEBFIFEEIEDDGEGEDFDEJDGECEGEDGEDEGCEFDFDHF?FGFDEGDEGD@FGFDFGEDFEEE@CKFDFECDGHEECGDEEECGEFDGDEGEDIDHEDEDJEGDFDHGCDGGGGEDEDGFEDHDDHFCDFGHEEIFGCEEHEFDF@DHFDEGDDFEFDGFEFFDMG?DHDFFCIDEGEHDGCGEDHEDIBEDHDFDGEDGCFJDGDFDGDEGEFDFBDHFDFDFFJA@BDC?ADDBD@ECCN@B@@DDE@ECCMBBDABEFB@DADA@IHADBCAC@ADAAAB@AEB?EBC?A@D?ACHEDNEFDHDFDGDFHEFDHDEIDGDDHDEDHDDFDHEFFDHEEGFFDFDDFJEFDGDDFHEG@FDDGDCFDHDFGDGDFJDEDFGEDFDDFGEDFHEDEGECFDDIE@CHEGCGDEDGDEDJEDFEHDDEFEECOEHCCDFDGIEECGEFDGEEDHGDFHDGEDGDKCDDDBC@AEAB@B?BGGHAC?DAB@BBAL@BD@A?CBL@BDCD@A@?DGHADACCDD@@ACACA@GHAADBA?AANCBADDDDJDGJDEDHDEDHEGEDICGDEFHGDFDEEJFKGIEGBP",
     color: "#1c892f",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#1c892f",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon17);

var polygon18 = new GPolygon.fromEncoded({
  polylines: [
    {points: "yhk`Hbn}cQGaiJ`D{tAd@k}I?qUfBmsFE{gEM}kB@mo@Gsh@q@_gCpCivAv@{_@X{KHcIDwb@dAuxEhAekIE{LJkN?md@gC{cFMgOtDifGUy{BcBioDxfBnAfq@VbCF~RRhDEpXj@r_AB`yCv@ruBRHuo@ft@Dvb@ErqD\\~tDeAbi@?`m@LjbMn@fzCVpm@?hnGmCx{CvBj{C?nRb@pPFtp@YviHq@C}_@vhCdBtn@El~@?hDFlfBEzzABpxApBzxAn@d{AI~nGb@|yATi@deCGfbCg@noAEnPOnZKrC^ddCAvmAStyDIbdCg@zbCb@tnAiEdtEP~{EDdbCk@~lNU~]AhWg@`iBnA~bFa@hbD?hb@p@x}En@~dCk^XmsCyA}zAS{@GmQ?keAXkb@Dmj@e@uFCgzA[ozAM_zADyyAPmzASyqD\\Wlo@o_@w@uZY{Je@_xCZiAYiSR}V?gi@Y_p@JkYZa_Ax@uz@bCcILu{BUukA[qfE{CmAEiW_@yh@q@y~ADyhEUsBHmbAdAsoGe@o~@xA}jDg@_gAMcG`@iNEs@MkD?cdETj@hq@wFh_@auAl@_f@a@_D_@}}Cl@kMtBms@`@wyAg@e|AaA",
     levels: "PDD?CE@@C@E??@E@AE@AC?DEBNAA?ABDAAHG@ACACA@@DDCCADAHGD?@A@DCDB@OBC?A@DAC?BCEE?CCA@DC@CANCB@C@@C?B@D@BBHGABDBBABEB?DAEADB?@DAE@DDD?CC@ABIEICBCDDEAP",
     color: "#7e51b2",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#7e51b2",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon18);

var polygon19 = new GPolygon.fromEncoded({
  polylines: [
    {points: "enx~GjvzcQx~AExh@p@hW^lADpfEzCtkAZt{BTbIMtz@cC`_Ay@jY[~o@Kfi@X|V?hSShAX~wC[zJd@tZXn_@v@Vmo@xqD]lzARxyAQ~yAEnzALfzAZtFBlj@d@jb@EjeAYlQ?z@F|zARlsCxAj^YrYNrmBd@jfCv@ryAKrtDh@VjaFT|CC`Fl@nyCnDxvCs@|lBk@xwBTtElA`bQBt|@XlmA?taAr@tbCmG~cCo@`tE|AztDtDlmC^z\\t@tkMn@ra@K~aGC|wC@vWCbEB|lAi@lbAgCdlMUv_CBxXUfpAP`UTxf@MzEUd\\IlDG|vANpiJE`RkAhtETfQDfPw@|rAB|w@IjPkAfbDK`iA_@tw@g@xuMU|qBEr}A_@fjA|@|kBkZPWEkkBnByk@^syA`@uk@nAi|AjA}RP}Vd@ayA|A}oGgGyn@e@og@NuyAeEmQ?kZo@ahD{@_KPigCGkyAMykDMEniA@|n@qzOtBoyAr@gzARuUAssI\\_BmsOMuoCIowBV}aAZmnFG{mAQ{t@\\q{CIoqEZegAd@cgA`EmbHZckHMc`B_@cs@FmHAaLg@akBFcKa@yGJmM_@iFV{ZHqfASscCkCqcNk@_|OF}dBR_~A?evAyAu`J|@seAD_pAj@asCVemBa@ewBq@obKo@sdCsAicKEkBw@ywK",
     levels: "PC@?BDAEAD?BEBABBDBAHGBB@C@B?C@@D@BCC@@CBNBB@DE@DB@AABFEFC@ECF@?@@DBB@AD?C@@BCD?C@CBB?AAD@@BDO@AABCB?BAGCBDCBECB@@I@IBAC?NA?DAC@BBE@BDFAA@AACBBCABCDC@ACECA@EABA@BP",
     color: "#e01a35",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#e01a35",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon19);

var polygon20 = new GPolygon.fromEncoded({
  polylines: [
    {points: "sgx~GhlslQ@igCG_~Bf@}jKL_mGh@m_Ae@{cAD{sDKacC?u{Ak@msEVi|ARknKPeuDJcxErsI]tU@fzASnyAs@pzOuBA}n@DoiAxkDLjyALhgCF~JQ`hDz@jZn@lQ?tyAdEng@Oxn@d@|oGfG`yA}A|Ve@|RQh|AkAtk@oAryAa@xk@_@jkBoBVDjZQ|dMwJ`dAcAlUMOlXi@fzEXxe@H`i@Cz`JB~D?hhBLl_DWlWHdPOpaEjArUo@poFAdm@Brr@?fbEUlgEb@pdH?dfBN|jPCt|A@dH?`dC`AhqSCtLwArj@_DdKcIdFiVqBuL}D_Oa@wm@zFqYbe@m\\zKgl@}AkWwZoQkGiPdF}JkAqBmA_EaX}GcF{KdA{R{VuIYmDjDuBvJoQjDcI_EcRe@s[dFyNjRyCz@{w@k^yn@}GcNk]e[_CwIdC_EbIaQ`PgYsOmVoAmLdTuRbCcNkCqI}EiPd@uUzVwI?oNkGkAoHwF_EkJ|JwIRkDkGqB?wFdCqNtUcL~A{P_EkGdCwChSsBjAwId@aRqHqKjAqKdIsLhRqI~CkdBwFuDpCsI~]_FzE{DiBoEkIaKkEmYbD{OwLka@_g@tAsLkAwIwFkAiS|MkDy@kDaX}JiJqHy@}GvCkGe@qB_BkAoQ_EqEqH?wIjD}J_BiMiJeF?}DdFqBhJeFdFcRSiGwCkGSkGx@cLpHqK?aOiLqa@aHmSI{EzEkMfE_DgEfE_]rI{YSkHoKcGsX{E{EjC?rIjCbLkCrIccAvQkp@wQ_SkR~HwQRgJoZcL_RrAkZ{EkGuUiGPkGpHkG~AcIkA}J_HqHvLqEx@_E?iPwIiG?{FbHoAjHfYjiAfOz^jP|Pw@nKwRvI}A`U_BdCkGrBaRMgTkHoi@jHuHdGkAl]_EbIeb@wBiGhDu]z@yRiFwIrBkJnK?|GtKdk@eUz{@_KjMwId@cf@mL}nAtOwRtK}PYqJ_GcKAaKzQv@`GcP|YoMdNqEjAcFSyFgEu^oFgDpCma@cUmIsRuIkj@cI}GwFpBwLvOqHjAkGe@iGcOkGy@cLd@}JjJ}Jv@gb@oKmc@~AoQfS{V|JiJkAqB}JkDkD_H~AuHpIu\\vBqEkA}GoNeCmAqNxCwJkLqQoA_EbFkHtAwWaIuLpHeI_B}JwIs[d@_HjGoHP}SiJiJe@eFjDcGbPiF|EyKcBwK{HqKpBsZne@kGjAqGiEcB_GaI}B{LaAoMvRqKbFgScFkJ?eS~DyLlQwIjDcRiMwI?}D|DsE\\A{RJ}e@sC}lPs@ygG@gkO",
     levels: "P@B@CCBA@BDA??M?CABI@I@@BCEBCDBCGAB?BDACB@AA@OACACA@@BBADCB??ADB?@??BEBDNEDDFGGFIEFECGFEFHEDEFDEFDHFFFIEDGEGFEDEGGDEDFFEDHDFEDFDGEEFDDHGDDJDDFGDFDGEEGFFDDFDDIDFDDGDDGDCFDFEEGEDIEDFEIGECEGIEGDGEEGFDDFDKDFDDFDHFEHEECIDEEHEDGEDDEHEFGEIDFEFDDHEDEDKDDEFHDEIDDGEEGDEFEGEHEDGDEGDEDFGEDFFFDFEDFDHDDGDEGGEDECGDFDFEDGFDDM@BADP",
     color: "#41e2b8",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#41e2b8",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon20);

var polygon21 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ao`~Gbm~zPjBm_F|@ayCeCeeIPimBLkVb@kq@e@_sAhE{gUt@qtOWkdGJyItFowDrBakErFu_KIsXWsxA}EepM\\g`@QcgFt}OlJbuD`BzcJrFl}OvKzfJzLzaB|A|b@fA|l@`ArlB{@jrDiBbCMlP`@pfFkHNmp@rwAvEprGkApVHzW]`~Bg@vsFb@bkDDzvH{F`VNpeGoAdmAFtyA?`~El@zrALf@El_BZjn@QbbCc@lq@Flr@Lb}@?t@Xji@Yjk@Ebp@]xnBEBTKzrA`@hl@WtvCAbiBYz~AHb_@Y`tBk@btCeAbeKeA`cCGv|AjA`jD|Cf{B~VdpQx@|jAan@oHi@Byc@m@{iBwAs`Cl@yb@`@mxA`A}`A@}}@TPxg@{CjcBCdwBD`^M`bBm@``FX~cB^zp@tFlzNvAt}CjA~}CvHrsTqYlFwDdEDbQfFtPqFxT{MtPqNrAahPe@kvKaAqGXwUDqa@GqTFidCfAs_BjA_gGfD?bA{cBeEwk@}AkwB]w~ClB_dB`@wDsv@uCic@kI__@kLqd@fA}m@iNi@cILcbFz@_iDN{fLuEmvCu@}DhB{iIoHygJkBq|@{@ugJeAmsCbAqO@ccC_AmvCQygChCqt@i@~Bg`K",
     levels: "P@DEB?CCDCF?D@F?BDBNABCEBCAH?ACDHHEABBDAEDBE?B@@AD?C?@BCA@BO?BB@AAD?ABBGD?CKE@AFB@BALCD@B@FB@@B?HDGDFENDBFB@B?BADE?EDBJBFBFFIABDBDEDCED@CBDDKP",
     color: "#a3ab3b",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#a3ab3b",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon21);

var polygon22 = new GPolygon.fromEncoded({
  polylines: [
    {points: "gst|GdchcQoA_cFf@aiB@iWT_^j@_mNEebCQ_|EhEetEc@unAf@{bCHcdC~zAFbuD]jnA`@lDIf\\OzNRtq@@~wAmA~CAl_M{BlyAg@?}_@v^YzmFcBjtDy@~[Kp_@F`XCp~C_ArvBkAvoG\\hdACnjDTdC?fBz@XaApp@`A`Ku@tgAEjK{Wl@{NsAoDqGiCcPlA]mU`EmQxJ_M~Ff@zy@uPlXir@cAmHuDyDyQcFmG}KKoLpCeExLxB`JeHBmEaEmM{P{V_AyPlTcYdFpFrRvIfTrC|Y@d@ncBV~zGCbIWpWFhN\\rqCIl@Dzg@I`pCWjuDs@|cDCd`BKt_AD~Uq@dk@n@x[VpAEpeFWhaGIvnW}xAc@yoGb@eXGyPMg~AG_TEuW?mLGgdD\\syHXen@u@{jJpBcsDaCE|p@_mFv@myEjA_AEuxAu@stDi@syAJkfCw@smBe@sYOo@_eCq@y}E?ib@`@ibD",
     levels: "PD@ACC?EDCAMABB@BAD?CAHGGB?B@BAEA@CBDDDCKDGDEGDHFDGHDEEGDFEGCEEIGDFDNBB?B?DAA?BA@@CDBD@ANBC@A@??CACDDGHAE@BBC@@LAC@P",
     color: "#0573be",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#0573be",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon22);

var polygon23 = new GPolygon.fromEncoded({
  polylines: [
    {points: "qut|G|fy~P`ByjIc@ab@dB}hWPu_@|Gm~JKcgK}AcbCZakIC_@^elIxAe`RRcsDziInH|DiBlvCt@zfLtE~hDObbF{@bIMhNh@gA|m@jLpd@jI~^tChc@vDrv@~cBa@v~CmBjwB\\vk@|AzcBdE?cA~fGgDr_BkAhdCgApTGpa@FvUEpGYjvK`A`hPd@pNsAzMuPpFyTgFuPEcQvDeEpYmFRpgACvRviBe@~mAc@bbJc@J|`GGpq@q@pjEMbX@tPEtb@EzGr@hiBRrrAC`l@ELHjhAH`VCxl@M\\p@zlJQjr@AfqD`BfbGi@dfIwCthEo@bdJv@phLCziAZto@CtHIt~AYhm@Y|eABzb@uCZmPqFaUqN}LX}PpDq\\qAaIoHaLqXaHU}TdQ}`@v^}LpG{Xd_@aMx[kEzEmX~CyKrDiN|WkRvQkNnDkhBiGaz@ca@gDoF_FkZYmX{Oah@sEoHwp@eo@sHyQ{Hg_@{DwDeNyCgH?gP`KmHwCoQsYkEyPmEqf@kD{HoFsDyOaF}Hx@kLxU}AjBuLTiQkHmGeHCcIlBoCrWwIxBiPy[uOqZwFgFiGyfJfAopAz@}v@Zwj@Zsh@MwjC}@{LMq_@SmzAh@{m@MoB?gbCvCszFbEiTIkcBZ}DAsjAf@qmADwrAf@yxAT_WLq|@fAm\\Zg`@Y}K@sL`@weB~@cU?qtAg@IfyAegACw_ADwm@RcUf@cbApAiwAQqEBkpDiAaqCuJk|BcA}ZBa`Cg@mdAaBmKg@w`@O?Q",
     levels: "PCCE@EDD@@B@NEDBEBACJFBFBJBDE?EDAB?B@BFBIEGEDGDIAI@COC?@@@?DAC@A@BABBACEDCDABD?B@ANDDFCEGDEICDFDDFCFDHEKDGDEGCFDHDFDEHEDEDHDGBFEHEFDFHDEJCA?D@A?CBE?BEA@BAAADA@CACBDAIH@ADAD@BFEBADBBBP",
     color: "#673c41",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#673c41",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon23);

var polygon24 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_`m|Gjb|sPDyr@vAkrE`@gvBb@wgBKk@ImhDpC_cCA_hEKuzAc@yNTwHIenAM_hGrDcaCj~@B~nEUrl@?nm@Yh}@OltBo@j_ALnF_XrNs]jnFwBz}BH`tR`Aps@nAbhBXhcHj@ndAVxU@{@`bD{@f{SCzuCS~V[zgFDbk@BleDUbwLDlwCDli@y@`gM?lk@G|uBG|e@ExHDdy@P`pAIhg@F~c@]p^HdoADbEIhj@DzVElEPp[kAdsCUfpBkAdcChArw@uAlkMKjbC?rbCXhnKwaChBckDEwsFc@a~Bf@{W\\qVIqrGjAswAwEOlp@qfFjHmPa@cCLkrDhBslBz@}l@aA}b@gA{aB}A{fJ{LcAiaKxCenK_@gzTGw~AoHovMcGkiISifC~M{}BvBsiO",
     levels: "PAA?CADE@CBB@EM@@B@@BHDHCEDCAA?NC@BBD@AA?CA?@?C@AABB@A@@AEBBDDAC@NDADBBAEHHHCA?FACBMDD?FBCGFP",
     color: "#c904c4",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#c904c4",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon24);

var polygon25 = new GPolygon.fromEncoded({
  polylines: [
    {points: "gtc|G`u{iQ^gjADs}AT}qBf@yuM^uw@JaiAjAgbDHkPC}w@v@}rAEgPUgQjAitEDaROqiJF}vAHmDTe\\L{EUyf@QaUTgpACyXTw_CfCelMh@mbAC}lABcEAwWB}wCJ_bGo@sa@u@ukM_@{\\uDmmC}A{tDn@atElG_dCs@ubC?uaAYmmACu|@mAabQUuEj@ywBr@}lBoDyvCm@oyCBaFU}CWkaFtxAt@~@DlyEkA~lFw@D}p@bsD`CzjJqBdn@t@ryHYfdD]lLFtW?~SDf~AFxPLdXFxoGc@|xAb@lUZjrIeDnwAy@pyAk@L_u@|vG|BpyAmBlyAdBjyAZpzAe@frDO~jAIxPEbzAIxyA_@_@xaCI`sClAl_@_@`Ag@hl@EjY[niDW|bB?fZGzHa@laFFb[?~d@c@zXe@rhJkApbIUntK@hQt@nbDJzz@TpxEYdi@~@tfOXlxFHlu@?ffA]jwGT?JnSW~dBs@~rI_@~u@}@f_KSbcG?vaCEr`GEp{B?dbWb@DeBfuI`ArmLyj@[qhCAqgJ`@g@Kqj@BihGHez@wBinD_@WdqA?bMkxAJg{AWqzALu\\EolA~AgjABudAG}SJmbAOwUIamAMwfBC_rGn@yoATy~@Wed@WayAn@okFZgc@^kyA?cm@BuuFHoVMsSl@mEJsLLwmAo@gMYB{`JIai@Yye@h@gzENmXmULadAbA}dMvJ}@}kB",
     levels: "PB@@DAA?BBC@C?DCB@@C?DA@BBD@@?@FCE@CFEFBAA@BD@ED@BBN@DAHHDDCAC??@A@CCAEA@HHDDCDB@??AOADDBC??@@@B@BDBBE?B@CB?@C@BBE@BBAD??@CDDNBBBA?DDI@HAB@DCDAA?@AC@C@DBBC@?ACA?DALBACAK@AIP",
     color: "#2acd47",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#2acd47",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon25);

var polygon26 = new GPolygon.fromEncoded({
  polylines: [
    {points: "qqr{Gnt}jQIePVmWMm_D?ihBC_EfMXvmAn@rLMlEKrSm@nVLtuFIbm@CjyA?fc@_@nkF[`yAo@dd@Vx~@VxoAU~qGo@vfBB`mALvUHlbAN|SKtdAFfjACnlA_Bt\\DpzAMf{AVjxAK?cMVeqAhnD^dz@vBhhGIpj@Cf@JpgJa@phC@xj@ZhlG?b|A~AxyAL|wAq@BxdGc@`aG`@rcCXryBwAbvb@HzWwIrCuSzB_dAyYksA}l@_Xm`@{PmI_h@yMqXy@}L~G{DDgiAkUeQnJu_A`Aq_@~FcOpFqQ`XyW|NmPlFkHsXkSl@oYrj@iKxGeGmGqh@eDcz@pa@iJfOqO|KuU|DggAyOaRn@iMdCqE|JwIhMsO|DuByAqQhFc@dF?xEkDdCwCd@eF?eFe@oHe@kDx@eIpEyZBmLiDmTEiKiPcDaCuQiCmR|Cm@fBqa@pJur@t]mI`Xgp@vJyuAzEiHiByLgWuCsJeFkGeCeCwCw@kDv@eCrBqBpH_EtIcIlAcIkDwISeI~DcIhGyCnQ}GjD{H_CiYcMcl@iJuH`BeT`QkGjAwIqBoQeLwZCcGpDoEzMqH~D}SeI}G~AsF|EiVxEus@oR_K^u^nOubA}FuC~F_H|j@g]fh@_Pf`@qFzAmQmMuSnOgKjo@_EhDiL_@{ExMpLfu@_AlXeIbI_^jGqN}DqHd@cFbYmM`[m[nP_QtAiFln@qDfFmx@hOu`@cCm{Apy@_OrL{AfGbDtPkDhSoHvCsHiBuL|BeFl`@iGhMwFv@eI}AqH|AcCpEPnTcL~DeF?uOeFcL~AkD|Gy@bR_BjDoN~AcObIkDtO?hVcLbOwIpByKgC{NqHuOh@kD|AqBpE}MxCkDkAeKoQ}_@qCsXhCwFzJaUnQqKjD}GkAeCdCeChDkAjM_EnKmMf@kNhr@wFvFyFSoNwFqE~AqEbI}JjD}Je@}ZeSqQ}DmCvJuPxLiYkJiG?cRvOuXcN_YzF_r@tEgSbUyWpMeI?uLeLwIR}JtOeCRqBSyFoKcCe@yFvC}GhP{VoKwFd@iVhMiGjGwIbCwIcCkDqHy_@wLwq@pKwIvIsBlTcFdF}Gx@iS_EsBdCQvOeCnHiMw@qEhGeI|VwFpBiSqB}DvCaC~F_T`Pe@tUkKzLmUDuKeCqBv@eFvOiJjDaXqHkGjDqH`UwI~A}GwCqHjDwCl]{VpB}JeCkGx@wCdCeG~RvAsj@BuLaAiqS?adCAeHBu|AO}jP?efBc@qdHTmgE?gbECsr@@em@n@qoFkAsUNqaE",
     levels: "PAA@@KAD?ACA?@CBBD@C@CA@?AADCD@BAH@IDD?AAADBCCCMBC?CAOCFGFFDGEDFJEEGEECGFGEGEGEDHFECGCFDDFBECHB@EBEFDFCFEHDDFFIDHCEACHCEBFDDEFEDHBEGDDFDEGDDFFDDGGDFKDFDGEGFFDHEEIEFDHDGEGDHFGDHDDGDDGDGDEDFGEDEGDCFDFDEKECFECDFDFEIDFDDGCCFEEGDFDDHDDHEGDFFFDGEGEEFDFCDGDFDGCDGDEGIEEGDFDDFFCGDDGDEEHDFDEFGEFDEFFDDGDNBDB??@?BDA??BCDP",
     color: "#8c95ca",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#8c95ca",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon26);

var polygon27 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ehizGzdmvPJkbCtAmkMiAsw@jAecCTgpBjAesCQq[DmEE{VHij@EcEIeoA\\q^G_d@Hig@QapAEey@DyHF}e@F}uB?mk@x@agMEmi@EmwCTcwLCmeDEck@Z{gFR_WB{uCz@g{Sz@abDxrQZbOi@h\\BlDLph@GlP?lx@n@f~HjBtxBKbuGz@vqAUhjIk@v|EjBxWEtGv[pBvq@pRpmAjRjt@`EbKvNlRlSbNnl@bQtKdAh\\xOdNrL~K\\xf@kFrd@fGxEbBpKbLfJjQzInCbQ|@nKcAbGbJdMxe@|@bYyE`aAwPdw@uNrcAik@h`B{B|M`Bx}@vNbp@xQdk@r^lh@nZbLhOKdj@h`@hJnKrOhG`IfCjSs@tOnR|Mjd@rPvKhOcAvDuC`GiM|CVvRdShNl]jDhToE|h@wJf_@|@vf@uZbgAoW|hBy@|N~Dj^hGrTrX|k@bo@zp@rEhPtElGdl@lDfVcD|\\hGtBtC`Cfy@zPdt@F`_@pJlb@~Zxz@~D~kAzOtc@lUld@cCns@rNh^v@pH}Lbk@|AtNzB|EtEb@rg@gIzG~BThiBlHjTxh@pbA`Yhc@bF~BrTuEzElDfNvl@vm@b}Az@vYxFvZ~R~\\jp@zt@baBtoAt\\hNlYiAbgAvRbGnCd]va@rCrUp`@f_AfHbM~UlThQjB~M{Chj@{QhNsJrY_L~[YhOlF|OtPfSdh@jPvUr_@tZpm@nRjz@~Ilv@hSz`ArvA`JzW~KlGlMpGvS`[dHjRdCrUr`@bz@jQpQtBrI~@t_@jPb_@Hvr@GtD@hkAeBfiXCbEm@~qDOrxDc@|kAx@~|JI|hBmrDl@w}Er@miCLiwKv@axASwo@Fw{MrB`@mjByA{|AAc|IyrDb@qyAMiyAG{yAYinBd@{yAaAgm@Ke@MyvAgAeo@[{bAm@ckBMqj@Ss_DHcp@\\kk@Dki@Xu@Yc}@?mr@Mmq@GcbCb@kn@Pm_B[g@D{rAMa~Em@uyA?emAGqeGnAaVOctDpCYinK?sbC",
     levels: "PADDBBDA@@A@BBAA@C?@?AC?AA@DBB@CMCDAA?BBDBCADBOEDFECIEDEDGDEGDDFDDFJEFHDFDGEJEHEFDDFDGEEHECDGEJEDEGEFDJDFEDHEFDIEEFDFGDGFDFEIDEEHHDCGEEHEFDKDFHEECHFEEDIFCDDFIDFDFHEEIEFAEFDFELDEGA@BC?BBDBO?C@BC?LCDKC@ACEAAAB?CAEB@ACB@?C?DA@@B?EBDL@P",
     color: "#ee5e4d",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#ee5e4d",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon27);

var polygon28 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{l_zGr`xcQHwnWViaGDqeFWqAo@y[p@ek@E_VJu_ABe`Br@}cDVkuDHapCE{g@Hm@]sqCGiNVqWBcIW_{Ge@ocBjJbArOw@xw@oc@bSiTvEgRH_H_GsO~NskBaGyv@LyWlCkP_Aa^}EoFgi@yLsH_IgDgJP}IbDgGnK}Fh`@{FxIcE|AwCoGmJcBaHZyH~Ry\\~c@AtMMzbAXd_@Yhb@g@ziB}ApXMb|ATL}]rUl@xkBw@lx@YzxAj@rkBGdQBdrCSh}Bp@xoAEvGG|[o@poBp@~`PAhCCx{AVttA\\hL`@hdBq@j`AQ`tBj@dL?fsAX`wC~AHw^biAEpRQzn@`AtAe@~IGlSe@xrEl@pxAErTZjrHl@|p@GfhCM`A|iEDvtEcAhaJ}@hxIc@nl@]vvE~Ar~BBbj@_@j`CBt}@b@xtAq@fm@b@rpFBd|AXz]WdvAb@jyDKbSVdOLlh@TvgFAxTR~_CHfb@LdyAmeDTqxDl@yqD^_d@OeHAc`@FejBmAilDgD{p@_@}u@TU|l@m{HpAabFs@klGaBypGYyyA^czAHyPD_kAHgrDNqzAd@kyA[myAeBqyAlB}vG}BM~t@qyAj@owAx@krIdDmU[",
     levels: "PA@DBDC@@AB?AAD?B?BBICFGEIDFFEDDHEFDIDFDDGDEDFNABD@@ACGGC?CC?@CCC@DC?C@BDAE@?BGGACDCACBABC?OBD?BAEDACACD@BBBABAB@A??NA@BA?EAACHGDBCDA??@BDCDDHH@ACP",
     color: "#5026d0",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#5026d0",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon28);

var polygon29 = new GPolygon.fromEncoded({
  polylines: [
    {points: "eizyGb_v`Q_d@@tj@sz@w@sV`EmUnL_OtIgJ~h@cj@jVgNr@}CoGgSd@mEzJeDjDsDt@{JeB}J{SiRuEcIuBySvPmSbCuTm@iR`Nev@vs@umAfNsj@tEy\\rFiLzHeFxJkBvBsFoA}b@fF_RbIqMxFk[lCgc@sd@glBzB_WwAaK_DsFmTwM{Mq_A`Gio@mAuM{HeWoD_EeHiB{JScG}Dq@yDpGkVOgKmH__@{BaKyRuI}`@q_@o@wPzBuFnMeI`BqG_Q}^{D{RXcmAwDcXbDyVjEeElNDrBoCpMay@vV_gAxHiLj\\cBbMyThAsg@~HaMnCqBrFVvQtYfKIdCoEIkP{BsH{IcK}QsEiBuDj@qClj@ue@pZuJrCaFC{FwKe[}D_W\\uIv[m~@`Z_[jSeLlFu@pGvEnPbXdOtJjH{C|IoT_AwQyC{IjLyU|Hy@xO`FnFrDjDzHlEpf@jExPnQrYlHvCfPaKfH?dNxCzDvDzHf_@rHxQvp@do@rEnHzO`h@XlX~EjZfDnF`z@ba@jhBhGjNoDjRwQhN}WxKsDlX_DjE{E`My[zXe_@|LqG|`@w^|TeQ`HT`LpX`InHp\\pA|PqD|LY`UpNlPpFtC[C{b@X}eAXim@Hu~ABuH[uo@B{iAw@qhLn@cdJvCuhEh@efIaBgbG@gqDPkr@q@{lJL]Byl@IaVIkhADMBal@SsrAs@iiBD{GDub@AuPLcXp@qjEFqq@K}`GjdGAxgFb@h|HMdpG]~A{aGpwDgEbzArBbtDXznGcOv_CaEfu@eAzyAwCDlaKoBn`CX``CoCltBs@v`CMdaCcB~aCeAdeGzAl|Bz@fdElAfeQChdDIbaBb@|bC^dqAf@hwHf@ldCz@dgG`AhlDd[aO~e@_b@fx@{gArTg`@rD{SMgIiSea@g@qG|BcLjBcCtGiAvSdCtSkCdHcDh\\y`@|B}EvAmb@hGs]bKmR|EgT^i[tXocA`EcF@~aAYdsSS|cKl@hpCrC`wF|AdsFaAtnBKvGp@lnAo@hg@l@|_Cf@njEghCL}p@FkrHm@sT[qxADyrEm@mSd@_JFuAd@{n@aAqRPciADIv^awC_BgsAYeL?atBk@k`APidBp@iLa@utA]y{AWiCB_aP@qoBq@}[n@wGFyoADi}Bq@erCReQCskBF{xAk@mx@XykBv@sUm@M|]c|AUqXL{iB|Aib@f@e_@X{bAYuML",
     levels: "PHFEGC@EHDDFCEGEDEHFDEGFDDFDEGFDEDJFDGDGFDHDFCDGDDF@GEHFDDGDFEJFDDFDFFGEEHDFFEHDFDDHDEDHDDGDLEDHDDHEFDFGDJDEDEGEECHDDFCGEEDGJEHDFCFDDFDCIEDGECFDDLA@B?DBADCDECABBAB@A@CAD?@@@?CMBCAJJEDFC@AOEDDCBBCFCDC@D@BB@AJEFDHDFFDHDEEGDHDDEDEFDL@?EBBE@CCDAN?CBABCACDCAGGB?@EADB@C?CD@CCC@?CC?CGGCA@@CBP",
     color: "#b1ef53",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#b1ef53",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon29);

var polygon30 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_{fyG|pn{PwHssTkA_~CwAu}CuFmzN_@{p@Y_dBl@a`FLabBEa^BewBzCkcBQyg@|}@U|`AAlxAaAxb@a@r`Cm@ziBvAxc@l@h@C`n@nH~cAXxSZx\\Avs@Jhs@M`xHlApfJf@x`Dk@rRFuBx_Gr@buGncBvChyAJvrDuC|tAPl}ADhRX~_BU|q@gBhdB_Cv}CeBdXQpbCyChlEeH~qB}@ljAe@lBDpJEzbByEps@^dfCuAz`An@|`D@fi@CzcJwDduDcDAdrGBvc@OnkAEly@q@tkACryBwA``EElm@F`@DvLNngOMbrBCfQuqJdCgzDhBgh@RmrNzHu|C_BaqFtDgs@r@}r@~Aud@t@{yAvCgu@dAw_C`E{nGbOctDYczAsBqwDfE_BzaGepG\\i|HLygFc@kdG@cbJb@_nAb@wiBd@BwRSqgA",
     levels: "P?B@@BF@B@DCNAB@BFA@DEBF@ABBCAKDKDED@BCFBC?DBD?@@DFCCC?ECO@B?DBBAD@AB?MC?AEFAEA@B@CFDEKJACBDC@IAP",
     color: "#13b7d6",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#13b7d6",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon30);

var polygon31 = new GPolygon.fromEncoded({
  polylines: [
    {points: "qnvxGpgixPFw|AdAacCdAceKj@ctCXatBIc_@X{~A@ciBVuvCa@il@J{rACUxo@Cpj@RbkBLzbAl@do@ZxvAfAd@Lfm@JzyA`AhnBe@zyAXhyAFpyALxrDc@@b|IxAz|Aa@ljBv{MsBvo@G`xARhwKw@liCMv}Es@lrDm@Gz_Bh@pmAMdSLl}@i@bfDFvkBVtqFiAr_GDbaC\\f_GEp}B{AjaBI^q@|bA_FhxFwC`cDkBjpBcAvsAqJDmBEmjAd@_rB|@ilEdHqbCxCeXPw}CdBidB~B}q@fB_`BTiRYm}AE}tAQwrDtCiyAKocBwCs@cuGtBy_GsRGy`Dj@qfJg@axHmAis@Lws@Ky\\@yS[_dAYy@}jA_WepQ}Cg{BkAajD",
     levels: "PBBA?DAA@BB?MAAD?BAAAECA@CKDCK?CB@C?MBBAAC?CC@AFAAA@?AN@@?DBD?CBFCB@DEDKDKACCBA@CBLC?DP",
     color: "#758059",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#758059",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon31);

var polygon32 = new GPolygon.fromEncoded({
  polylines: [
    {points: "cplxGrypjQaAsmLdBguIc@E?ebWDq{BDs`G?waCRccG|@g_K^_v@r@_sIjo@k@nbG^|iF?`iAKfg@Qxb@g@lyHUv]Jxn@EAcbA|h@FbiCi@`k@Hdo@DlqD_@d{AA|i@Jxm@@pyAQpyAIznGZ@nbGLz_A?laENf}APpwATteAN``G}@db@bAn~ELb`CB`_CCbjCo@t|RWxpCEhBTbmBIlbOwzHt@idFoAikJz@owD_B?rIi@hbAy`M`@gzA_C}wAp@yyAMc|A_BilG?",
     levels: "PDDC@??DBBAMCACABCAAIHAB?BBA@B?CN@AB?@BCCB@D@B?CBMDCDI@HDDCCDP",
     color: "#d748dc",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#d748dc",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon32);

var polygon33 = new GPolygon.fromEncoded({
  polylines: [
    {points: "aolxG|yweQTotKjAqbId@shJb@{X?_e@Gc[`@maFF{H?gZV}bBZoiDDkYf@il@^aAmAm_@HasC^yaCxpGXjlG`B`bFr@l{HqAT}l@|u@Uzp@^hlDfDdjBlAb`@GdH@~c@NxqD_@pxDm@f`Gc@Ob_Ep@~vHS`nCF`o@?tiANthBUzVQfrLgAv{DoB`{Ch@`B[`hARzeAn@~jF|Bl}F?vDaAlVWjiIGn}C[lIHd^K|jBa@jjB[x{@PncAYroDm@xtM{nG[qyAHqyAPym@A}i@Ke{A@mqD^eo@Eak@IciCh@}h@G@bbAyn@Dw]KmyHTyb@f@gg@PaiAJ}iF?obG_@ko@j@V_eBKoSU?\\kwG?gfAImu@YmxF_AufOXei@UqxEK{z@u@obDAiQ",
     levels: "PBBDB@B@@@??CBDDAMCBDHGCAAC?AE@ANBBB@@CBEBECC@CEAC?CBAB@BB@NC?B@ABB?BAHIAACBACACMBBC@C@?BBC@?P",
     color: "#39115f",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#39115f",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon33);

var polygon34 = new GPolygon.fromEncoded({
  polylines: [
    {points: "os{wGrrmlQI{WvAcvb@YsyBa@scCb@aaGCydGfzA~Bx`Ma@h@ibA?sInwD~AhkJ{@hdFnAvzHu@l|@MhbNDn`Fu@ln@a@jl@GraFcA?baONv~BLhxAKvqHBxsD[tyGDrj@A`bAKdvACt~@B~qAUnZMvqAQle@JpHd@brCGpa@LtxAg@vuB?jIOrb@SdaF?nlA[jmLB`DOb_G?tg@PtxAMlLKb{@gp@bt@iAjAq[|^_TfY{UtXgR{Egc@sYq[yCa}Bim@ub@uTeZc^}KmRmGu_@{E}FuwAoaDwvBqtFoTaV}o@ui@mP{_@}bBasEis@qtC_g@_zAuf@}}@wq@y_AupAg_Aqa@cMy\\_EaU_Lqm@ie@cRyEsKiIqIeNsRuk@cTob@}[q]ml@_c@ca@g_@}KyTaOge@kUaXgc@}Sol@aMe]HqKeEuRuKurBqHiT|GgJp@m^mP}[zCw~@cGwGcOqRaBym@m@iYr@qNqEcXyPeH`FeEdEyVbByF}AmO_OmH|@k_@f@cw@wFqJuCqt@mF{K~CmOtOyqAra@_gBvKky@RqnA~EiLzAgUfJmt@_Ic`@lM",
     levels: "PAC?CBMDI@HDDE?CDAB@NB?B@DAA??@CA@CABAD??C@@?@B@BAI?BCBNEFEGEJEEDEGDFGFEFJFGDFDDDHDDGDDGDELEEFCGFCGFEFFDCFDGBEGDFCECDIDEHDDFDFFP",
     color: "#9ad9e2",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#9ad9e2",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon34);

var polygon35 = new GPolygon.fromEncoded({
  polylines: [
    {points: "q_uvG`il|PbB_bCLeaCr@w`CnCmtBYa`CnBo`CEmaKtd@u@|r@_Bfs@s@`qFuDt|C~AlrN{Hfh@SfzDiBtqJeCiAv~Vx@dwEBlkBj@lmKvAlv@Lxb@a@r~GCt}BUd`AEpbEf@bcA?v~@Rnn@cLfOkM~YwBbE}`@r`@uYjOeXjJog@`CeJdDwBbBw`@rg@iHnTqZvk@sB|NoWt\\sg@jRsi@p]gM`I{OrDoUkHsl@tB_XlHkHnAey@qCuD_Bm^kc@wFyCw|A~EqE}AqHaEcFwJgFw_@_F{UoJyOaN}AwEjF_AhGxA`MrPlm@`BrQ}Fn[mGvGsOpBwP}@_jBjb@iClE{CpWsRp\\sWbV}L`DePtAwGyCcBeCmCwVmFsLyNoPy[xCiGpe@mB`g@}J|t@k_@dfAwIrEiXxw@oGzI{L|F}RlDwi@|\\gHDsU}NeFc@wLxCyCxG_Kn[iKjLcDLa\\_KsK|CaEbFuXncA_@h[}EfTcKlRiGr]wAlb@}B|Ei\\x`@eHbDuSjCwSeCuGhAkBbC}BbLf@pGhSda@LfIsDzSsTf`@gx@zgA_f@~a@e[`OaAilD{@egGg@mdCg@iwH_@eqAc@}bCHcaBBidDmAgeQ{@gdE{Am|BdAeeG",
     levels: "PCBDEDCLACAEEA?CMDB@DBD@AACBALDAEGCEEBGEDDEGE?JEEFBEGDCGIBEFCFEJDFCDFEIDEHDEFEIEGCEDGKDDGDEIEDEGEFDGBEGDEIDFEDEDDHDGEEDHDFFDHDFENA@BB@D@CDCDP",
     color: "#fca265",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#fca265",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon35);

var polygon36 = new GPolygon.fromEncoded({
  polylines: [
    {points: "eokvGj|n_QEsQR}cKXesSA_bArK}C`\\~JbDMhKkL~Jo[xCyGvLyCdFb@rU|NfHEvi@}\\|RmDzL}FnG{IhXyw@vIsEj_@efA|J}t@lBag@hGqe@x[yCxNnPlFrLlCvVbBdCvGxCdPuA|LaDrWcVrRq\\zCqWhCmE~iBkb@vP|@rOqBlGwG|Fo[aBsQsPmm@yAaM~@iGvEkF`N|AnJxO~EzUfFv_@bFvJpH`EpE|Av|A_FvFxCl^jc@tD~Ady@pCjHoA~WmHrl@uBnUjHzOsDfMaIri@q]rg@kRnWu\\rB}NpZwk@hHoTv`@sg@vBcBdJeDng@aCdXkJtYkO|`@s`@vBcEjM_ZbLgOjR}Nzh@\\~\\{@nPkCfE~B~HjDvLgEfc@zTjMf@~RoF~M{Tni@ce@vGk@ni@nWnPwBv`@|Axf@wDnKmYbV{Un`@_t@~Rm`A|W{_@pQcMhVqd@nK_Hpn@jBpPtE`Hq@nY}b@~Eef@vNss@no@oj@`Ega@`JuHdPuB~EyF`@oXkQyk@DeKfDaFnIcD~Y}CxMJ|V{OoB~K{DtUhA|BtAv@rHrKl[vBlXn^lF~C|DdAvEtGzErN|Ny@dJfQz\\wHbQhFpS~\\`\\pXjNxC|JHnAAlJvLrHfRmAdJ~D`Dtk@y@xc@_ZdDzBf@vKpHzTzP`DzW~LhWrQbRPdHaBpXqLlHzEtBjMqCjYbFnGzLng@rb@d`@lb@hWzBrEnNxXrfCx~EiAxKx@nKtMlAlA`DLzKyDrYdD|\\oF~MqBxAul@nF{NdOqN~\\iHnEsFfF_Djr@`Iht@pItUuCxm@xC~U|TvRfCpK`GlcBhBbFnGdLZzHoCvS@zOdB|MxJtX|CzA`UqL|HmAzCzAfEz\\hDbItuAkCpAp`B`Av`B|DtaMuB`wBij@?ql@Gk|APszATS~At@~zBbAd~@Tx~@V`cB?hZQx~@?r~@Ghj@LjuCCv|@c@juDRh_AFbGf@zkBBbMf@fmMWbrBq@vyC[nrDX|}BTl_A_@dpAGhi@DrDam@EefCCwjE_@{{CCW~bOQd_Cb@h}JrBlkMIzn@Kh`FDfrCi@vmFEt~A`@n|@ueOw@}UB?AsDM?DkCG_D?{b@PiPC}mBKceJh@Err@osDq@wlCqAmNJyt@JwvCOejEhAebAHweFA}cCPMeyAIgb@S_`C@yTUwgFMmh@WeOJcSc@kyDVevAY{]Ce|Ac@spFp@gm@c@ytACu}@^k`CCcj@_Bs~B\\wvEb@ol@|@ixIbAiaJEwtEaA}iEg@ojEm@}_Cn@ig@q@mnAJwG`AunB}AesFsCawFg@u}B",
     levels: "P@?@JEDGEBGDFEGEDIDEEGDDLGDECGEIEFEDHEDIEFDCFDJEFCFEBIGCDGFBEFJD?EGEDDEHBEECGEADEJDDFAEGEHEEHEGDDKEEFFEEHFDDGIDGFFEDHEEDHDCFK?FBBHFEBECEFGFGEFD?GEEDIFHDDGEDHECFNEFDGDG?@FDFDJDEEHDFHEBFIEFEGEFFBFCDFDIEDGDDGJ@CEK?B?DKBC@E@@@BABD@@?CDAAC@CA@L@AAKACCD@ABACO@A?A@?CA?BHGBD@BCABAM??A@BABABBB@DCACADEAB?CEAADCC@DBBP",
     color: "#5e6ae8",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#5e6ae8",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon36);

var polygon37 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_ohvGtymgQx{Av@|MD|zDRrbFgBdU^duDElFEft@AlF@xh@KjfAAfbBHjqA@BeWG{i@rwASlfBFtaGUzwA^`iJ[bfCYjl@?LhbWWf`CFv_CEv_CQrbDAn_Bb@b}Bn@pyHZpqIAvnBFjaC?~z@KjaCW`hC_Bn}FO``AopKs@mo@?mvA[cf@WgK?e}A`@_a@@c{ATssDXgyAL@|hAsaFbAkl@Fmn@`@o`Ft@ibNEm|@LHmbOUcmBDiBVypCn@u|RBcjCCa_CMc`CcAo~E|@eb@Oa`GUueAQqwAOg}A?maEM{_AAobG",
     levels: "P?BDDC@??@@B?H@IAABBAAMBBA@@DACA@?E@C@N@B@D?A@@?HI@BADAMBC?B@D@BCCB@?BA@P",
     color: "#c0336b",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#c0336b",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon37);

var polygon38 = new GPolygon.fromEncoded({
  polylines: [
    {points: "qmhvGfd_gQX_pDQocAZy{@`@kjBJ}jBIe^ZmIFo}CVkiI`AmV?wD}Bm}Fo@_kFS{eAZahAi@aBnBa{CfAw{DPgrLT{VOuhB?uiAGao@RanCq@_wHNc_Ebi@CveF@dbAIdjEiAvvCNxt@KlNKvlCpAnsDp@Dsr@beJi@|mBJhPBzb@Q~C?jCF?ErDL?@|UCteOv@e@fxJL~hKYdaEFp}Cn@ddIgBlwAzBf_IVl_E`@b_CR|~Bq@z}FQj~Bo@ndKAlgHIlwAVb_GDh`Ckl@?cfCXaiJZ{wA_@uaGTmfBGswARFzi@CdWkqAAgbBIkfA@yh@JmFAgt@@mFDeuDDeU_@sbFfB}zDS}MEy{Aw@l@mtM",
     levels: "PBC@BABB?CAEC@CCEBEBC@@BBBM@BACB@DBGHB?AC?@A?A@NBBCADDCA@EA?D@B?NAABBAAI@H?B@@??@CDDB?KP",
     color: "#21fbee",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#21fbee",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon38);

var polygon39 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{lcvGnwtyPjBkpBhFi_GlCa|Cp@}bAH_@zAkaBDq}B]g_GEcaChAs_GWuqFGwkBh@cfDMm}@LeSi@qmAF{_B~xARzyA}@pqMr@bRElFDzt@Tj`D?~q@oAf|ApAvl@@ZglFAyb@GsADcWPkaCRi|@?u^^ccBr@m|@Pc_AbRB`bDNzfAG`bA@dk@P~uAgCrs@?|c@Uh\\Wv{CyAptDkIw@~`DuAhoBQp^Uzm@K~m@oEr}@Vtq@@v}FqBf`C\\h|ABhb@z@hcGDz}@ClLDh]Stq@FlNH~aAJhp@Gry@Ep~AVjeGBhJHjlBK|_AUlaG?jdAG`tBaAdxHqD`cCsJ`@iqEXafC|@ieCKavDButDJmj@j@muDbD{cJvDgi@B}`DA{`Ao@efCtAqs@_@{bBxEbAwsA",
     levels: "P?A@AAFA@CC?CAABBMCC@B?ADDBKAAA?C@@BBL?A@AFDB@@ENB?B@EFBDD@?B@@BB@?D@B??C@??EDMBBDA?E@CE?CCCEIP",
     color: "#83c471",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#83c471",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon39);

var polygon40 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{ybvGfv_wP?}Eb@}kANsxDl@_rDBcEdBgiXAikAFuDIwr@jDrKpAbc@jFpH~R\\jBnAfClNtDlx@bIhRbR|TbN`BtRcDjkAdQrN}IfBVjo@j`@xtAxGn{@vKhe@hUv[fHjv@xItJlGb_@jD|L_E`T[l^`GjTOl_@qGtd@cV~TwAp_@xMpf@tHtVCp^uRzcAnIxSqF~KiOjc@y}@tE_yCjAsO~Qe{@nLybAe@ceAyIcaAkX_fAaEoZuB_|@n@aObG}RzSib@be@}n@~ZueAjiA}xBrNgGtJWhdAbTvi@w@dZuE~LsMta@gt@dTqW~~@k{@n~@yj@hh@oU~Wc]pp@_h@fH{Qt[ocBhQmn@bDiDpoAae@dV^|r@|Mh`A|EfP_DjLwNnEu@fc@fHvX`N~\\[hNjq@dPbb@dYv`@bw@rm@pWdJfOiBpD`Elx@bkBp^ze@jLdEtOdAfeAi[bRyBtQHrOdE|k@f]r_@h_@bjA`nBr^j]pVh[pZnq@NbnC@xxAUr{BRroASni@SrNRbdCg@vtE?rwBRzh@Sn~B{@vsCSfaA?rjASzaA?~RSn`B?vfBcQRsb@?o~BRgm@f@{c@?sDScL?_lEgEqo@l@kRJ{C@iXIyaCzBsuDlIw{CxAi\\V}c@Tss@?_vAfCek@QabAA{fAFabDOcRCQb_As@l|@_@bcB?t^Sh|@QjaCEbWFrA@xb@[flFwl@Ag|AqA_r@nAk`D?{t@UmFEcRDqqMs@{yA|@_yASH}hBy@avJ",
     levels: "P@BB?CB@AMDFECGDFDJDEFDGGDFFDEDIDEDGEEGDGEFFLDGFDDHEFDGEDKDFFIDFFDIDDFGDFEHDDHDLDDGEDFEFIDGEGEEHEIDFEDHDENFDEJ@BBBACBBADB@CA@?AMA@ABEAAF@B?BDD@@BDFA@A?LBB@@C?AAALBDDA?B@CCKBP",
     color: "#e58cf4",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#e58cf4",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon40);

var polygon41 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{ofuGnh~mQLmLQuxA?ug@Nc_GCaDZkmL?olAReaFNsb@?kIf@wuBMuxAFqa@e@crCKqHPme@LwqAToZC_rABu~@JevA@abAEsj@ZuyGCysDJwqHMixAOw~BAakQfyAMrsDYb{AU~`@Ad}Aa@fK?bf@VlvAZlo@?npKr@Na`A~Ao}FVahCJkaC?_{@GkaCjmAb@bj@fFhlCYfx@Xj}D_AdVQ~l@kA|k@SxxA]xxAdAtyANlyA\\hyAj@PmxA|xBA`HF`v@ChoEYeErIs]vBgKdMyMte@aLz{@}[bnA_F`B}DnN|@nGrZdh@lEbOsNbaBy@zh@gJxImLx_@_ExW_c@fwAqMvk@gFzJgQdQkThHySl]mGbFmHhJyGn[b@`FlEnGzGfZBbHkIp_@e@zK~GhGlChMkDbIiBv`@zCdOqAzAuEgDsUxi@l@pQbEnG~BtXmEno@eEzHqj@fYcQzDqRbQi@jN_EbGcId@{JuCqUuXyJeAeKtm@Ptm@cAhZeDpW?|ChMxAvAtCsAh\\_He@yI`F{I~M~JbMfCH?rEyFp@_FnIt@`DlGyAl@pb@cZ`l@}F`XeC|h@dCrM|@jb@wBrLaGGoDzFnHnq@mB~RQ^aH`AaH~PgAbXbIdc@xHtpBbE`FV~OwBdTuP`SwDzIgIbZ_XfFeFtFgD|m@xDzEgDpNcDpCz@riCe~A]muAt@EsOaBgE}PlLGzNeLxPwWfDef@vXoSr\\aHrGeKpCkZ`B{zA~}@mh@dSobAtg@os@zoAwMhe@yo@htAyPfx@oJzu@oC`f@o^`dBsVrx@cN|m@iTxc@wm@peBu]lfBcFfsA@zy@sDjl@|ExxAqHhq@`Ab_@w@h^sErScc@|u@uv@bz@yaAzu@}yAbsAsa@tk@uIjGgq@rX_i@`Iu_@jX_KbEuVf@wYfJasAbm@qnAho@wg@f\\_zAnaBi`@|V{y@`w@{T|_@mF~P}~DdpEJc{@",
     levels: "PA@B@?@CB??DABAC@AC@??AAD@B?BM?@@A?D@B@L@C@B?KEEBCDAC?EB@AII@A?OEFGDEEEIDDGDHEEDDGDEFDCEIDCFDDFDGDEGDFGDDFIEDFEDHDEEJEDCFEDFGDEGDFEDFEFGEGEDFEEFFAEEEHEDDHEECGDHEEDELCGDIEEFEFCGDFEDKEEHEDEGDEDFIDDEEECHEKEDEDHEFCFEFEDIEDFDFHP",
     color: "#475577",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#475577",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon41);

var polygon42 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ukauG~ue|Pw@qhEhAw~VBgQLcrBOogOEwLGa@Dmm@vAa`EBsyBp@ukADmy@NokACwc@@erGtj@k@ttDK`vDCheCJ`fC}@hqEY~YmArVRp`B@dIAdd@[~bCG`SPfa@T~d@Rhk@If_Ar@dW`@`}FhE|iBfBdvBtAzEA`]u@sDnx@gTnVmJjKeNvY}D`m@{Ox_@wn@ls@iLfE}JPmQt@qn@`Cia@fI{PtKyXxNil@zKaGjFwAnIoAzPrAfKnGpGjKrAvDa@lL~EdKvRtEzR{@vyAfApk@aCzdAKzAeUhuAj@nm@l@~^sAf`@`CxWpA~[mCzf@pCl_AeE`VsXtg@eYtSiAbEe@nI`ClKnZb_@~LdeA}KljBIbxAp@xMlJfp@vQti@Qr^sPngAce@tgA_Wxq@gDfQ}Idn@_Nvd@zBrAwDhGgDfGuAyCg_@~g@iLhFeo@nfAgMrIoNrCaDxHcIjy@wAh}@iJjzAgCnNel@bgAqPlR_UnP_WtLu`@dDmLdPwY~cAkOfa@qL~NoPdF}XhDsHxG}N``@}BnVmC|`@|FxY~@`s@uEvTl@dJvClFzWjQlM|Wb@xNg@`Fow@`nAgKhWoOla@e]nSuRjT_Lt}@nEb]vI|IpGvHn`@jBdExFz@~Q_IrI{L~B{NmByWy_@uFK_HjC{C`IzCj\\vDdRb@|RmD`]gDdK_I~Isf@d^sG|NkLxf@uIfLs[~S}VzOyMK_Z|CoIbDgD`FEdKjQxk@a@nX_FxFePtBaJtHaEfa@oo@nj@wNrs@_Fdf@oY|b@aHp@qPuEqn@kBoK~GiVpd@qQbM}Wz_@_Sl`Ao`@~s@cVzUoKlYyf@vDw`@}AoPvBoi@oWwGj@oi@be@_NzT_SnFkMg@gc@{TwLfE_IkDgE_CoPjC_]z@{h@]kR|NSon@?w~@g@ccADqbETe`ABu}B`@s~GMyb@wAmv@k@mmKEazB",
     levels: "PC@?CA@DABBD?B@MC?ACBDDAB@BF?@BCAAAAD@NG?EFEFIEA?DGBEEJBDGECDFDHDDFAGADEBEDHEEEBIDFGEGCEEKFCFBDEH@EDEEFDEHDDDIDGDFGECGFDFDJAEEDDGDFECIEAFDGIFAFFDKDEGFDIECDFDHCFDEGAFCEDIDEHDEFFGDIGDDFHEEFFEEIDDGEHEEMEEEAGDDFJABCAA@DBD@P",
     color: "#a91dfa",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#a91dfa",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon42);

var polygon43 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ksftGr|_}PnB_Lr[_TtIgLjLyf@rG}Nrf@e^~H_JfDeKlDa]c@}RwDeR{Ck\\zCaI~GkCtFJxWx_@zNlBzL_C~HsI{@_ReEyFo`@kBqGwHwI}IoEc]~Ku}@tRkTd]oSnOma@fKiWnw@anAf@aFc@yNmM}W{WkQwCmFm@eJtEwT_Aas@}FyYlC}`@|BoV|Na`@rHyG|XiDnPeFpL_OjOga@vY_dAlLePt`@eD~VuL~ToPpPmRdl@cgAfCoNhJkzAvAi}@bIky@`DyHnNsCfMsIdo@ofAhLiFf_@_h@tAxCfDgGvDiG{BsA~Mwd@|Ien@fDgQ~Vyq@be@ugArPogAPs^wQui@mJgp@q@yMHcxA|KmjB_MeeAoZc_@aCmKd@oIhAcEdYuSrXug@dEaVqCm_AlC{f@qA_\\aCyWrAg`@m@__@k@om@dUiuAJ{A`C{dAgAqk@z@wyAuE{ReKwRmL_FwD`@kKsAoGqGsAgKnA{PvAoI`GkFhl@{KxXyNzPuKha@gIpn@aClQu@|JQhLgEvn@ms@zOy_@|Dam@dNwYlJkKfToVpCxBdH`BbLgRt@aN|KgMzEtA|@jCKbUh@vBrb@zJzInRvGzGjDh@pLeGpHfA|IfIrDfJeA~JeHxGeHdEuQrDeM_@aBtFThs@h[jXp@fDwBfYjXv|@`\\|i@Ozd@jXheA{@pNmV`JjDjPjCSz^cGbZf`@cCtXeKSiQ`O~CfT`KnD`MnO_Glc@gAdh@fAvHbBz@zENfGuEr@cDtFmCpIbDlBpFf@bXqDdOmHnGmZbH}D|NjDrPng@`e@|HuAnJnKdBnIXn\\xD~NtRtKfMf@pUiKhg@ic@`NkTbEkRrTg^|EwCvs@}@`n@`{@l^ppAGhLsEhQjBdVvHpN|ElUAd`@|FnPx\\hStHpJpMn`@b^~e@b}@jg@zUlYvr@rt@~eA|`@j]bB`DvQ`YmDxOGxIdHzEnOvVjWbGrDtIbFhB~FbG~bAu@rMiDtVmH~^`@XpCXlIgDzHuIbKtCl\\f\\va@vI`EQ|XvApPRv@Llk@R|RGlk@B|fAOfhACpuCgBAe@~u@f@rb@Rg@n`GSb|Ag@~dFbBrXg@b}C?n}@mBhdU@j~HY`~DSbqDBxhAM~]n@bcE[vZU`~BkAz{FYr_AFb|@mlCCyuANi|AUm]PuTAwCKsbDXu{AKk_Fg@ygEG{bAG_LJi@KoiFPqQSwq@~@cGMoKVu|CbCGtGDtLa_A`BayBnAy{AaAuuAjCiDcIgE{\\{C{A}HlAaUpL}C{AyJuXeB}MA{OnCwS[{HoGeLiBcFaGmcBgCqK}TwRyC_VtCym@qIuUaIit@~Ckr@rFgFhHoEpN_]zNeOtl@oFpByAnF_NeD}\\xDsYM{KmAaDuMmAy@oKhAyKsfCy~EoNyX{BsEmb@iWsb@e`@{Log@cFoGpCkYuBkMmH{EqXpLeH`BcRQiWsQ{W_M{PaDqH{Tg@wKeD{Byc@~Yuk@x@_EaDlAeJsHgRmJwLoA@}JIkNyCa\\qXqS_]cQiF{\\vHeJgQ}Nx@{EsNwEuG}DeAmF_DmXo^m[wBsHsKuAw@iA}BzDuU",
     levels: "PEDFDFCHDFDCEIDFGEDIDFFAFIGDFAEICEFDGDDEEAIDFDFGCEGFDGDIDDDHEDFEEDE@HEDBFCKEGECGEHFDHBEEEHDEBEDAGAFDDHDFDCEGDBKEEBGD?AEIGEEG?FCFEENDECGFDFDDFDIEBFDGDIFCFEHFGFFHAGHFEHFDGEDGCEDDEGDHEDFHFEEGDDKEFGFDDHDJFGDEFDEEHDFEIFCGEFGDGDED?IDFCBCKDEGEGEBBAGB@A@DCD?L@?CDAADB?AACDBA@BNABBAABC?B@AABBGBBAGAFCDDLDGDEGDHCDDEBFFEGEFEIFBEGFFCHEDFDFDK@?GDGDFEJFCEHDEGDDHFIDEEG?DFEGFGFECEBEFGBBFP",
     color: "#0ae67d",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#0ae67d",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon43);

var polygon44 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{|dtG~wuwP]i|ApBg`CAw}FWuq@nEs}@J_n@T{m@Pq^tAioBv@_aDzbC}BhXHzCAjRKpo@m@~kEfEbL?rDRzc@?fm@g@n~BSrb@?bQSf^Rhv@?rzAD|_ALf`D?jnAR~u@RfbHvBfO?~MRja@?fh@Rja@S~lBz@?vmASfzA?rv@Sb|A?xyESr~A?v`@Sz_BSju@RzJ?zxGSnd@Sbo@RnFS~W?zc@RfJ?bQzr@oA~\\SbVR~k@Rrl@g@nA?fORzE?bGSv`@?rl@SrS?vj@S~R?fY{@fY?jRSbL?zc@f@fESjM?~RR?r~FSv[f@bcAgr@gOon@vGsl@vQ{h@oFsXgJ_NwGct@gJcVzE{^HgEq@wrA_I_NnKoPnZqLbSsG|VyKxOuXhHsUZu^lEkN|L{N`J{c@vj@cLvGsIz@cLrIIN}DrKoFbe@oFfT{Yn_@mTrf@}_@fgAo{AvmAsSb|AkRxe@kk@ffAcQzYoi@neBsN~Ro}@zh@cGpDsN|O{EvLkMvj@dF`YfAzSeJna@cKjy@}HzTmQvVgFdSa@nObErfAmCjV{EvI_T~^oZx\\sd@tRmD`FmYhbAa]t@{E@evBuA}iBgBa}FiEeWa@g_As@ik@H_e@Sga@UaSQ_cCFed@ZeI@q`BAsVSkNj@pDacC`AexHFatB?kdATmaGJ}_AIklBCiJWkeGDq~AFsy@Kip@I_bAGmNRuq@Ei]BmLE{}@{@icGCib@",
     levels: "PDCBEE@B?BLB?B@EAAEBA@ADB?@AEA?@ACABBMA@@BB?@ACBC?BBBAAKBD@BB?@CBA@@@CBACABBAKBCNGEGECEGDFBJEAEDHDDGCEEDDK?DDFECHGGDBFHE?EICFCFDGDDGDEH?DFDGL@DAAAAEB@?CB@BACMDE??@C??B@B?@BB@@C?P",
     color: "#6caf00",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#6caf00",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon44);

var polygon45 = new GPolygon.fromEncoded({
  polylines: [
    {points: "eudtGnokbQc@i}JPe_CV_cOz{CBvjE^dfCB`m@DdfCGlk@Xxx@Avu@JvdA@bzAClm@S`k@]@cb@xsA@zwAC~yAi@`nGy@tyANjl@?bl@OreMKzxAn@j[XlQE`fC\\nXHtyC@lfIvAbRK`fE\\i@j{RDxxAJxc@G|Ri@dh@LtWzAzrHVfwBA~}DDxPEtl@Tl~BX~rABds@DxdIMlm@AdqAHzi@Pz`DHxq@?~l@J|`A@jh@EnRJv|@Mx|BG`oC?zu@qsDDuiJsAq_Co@i_Bi@cdF_C{xAa@qiJSmtDe@ggCN_gCj@cyA}@up@Kwg@Cg_@eAmu@`AE`u@cyAw@ylGH{T^ieAd@_}@B_z@HymGDuiBi@{m@UuwAXM_iKd@gxJa@o|@Du~Ah@wmFEgrCJi`FH{n@sBmkM",
     levels: "PCALAA@BBB@@CB@HG?BBC@BAEACA@ABBANB@C@D@AC@@B@D?A@C??A@?@@B@?NCD?AAEBCADB?CHHHCCAC?DC?CMBCCABA@DP",
     color: "#ce7783",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#ce7783",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon45);

var polygon46 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ysdtGhpvdQGq}CXeaEtwAYzm@TtiBh@xmGE~y@I~|@CheAe@zT_@xlGIbyAv@Dau@lu@aAf_@dAvg@Btp@JbyA|@~fCk@fgCOy@l~VxDpzVf@l_C\\t}Jd@d~BYp}BGxyRc@xoKClL?prCI|g@Ppc@Sf{FU`|Rc@lJOfrBKdvC[dhEeWb_@iLx`@a@bIjCpWrFnCAhPuWtk@aDrBsZ`eAm@jMrBtKoBd]aIn[oItWsKhE_RpPmNbj@ioEXav@BaHG}xB@QlxAiyAk@myA]uyAOyxAeAyxA\\}k@R_m@jAeVPk}D~@gx@YilCXcj@gFkmAc@@wnB[qqIo@qyHc@c}B@o_BPsbDDw_CGw_CVg`CMibWEi`CWc_GHmwA@mgHn@odKPk~Bp@{}FS}~Ba@c_CWm_E{Bg_IfBmwAo@edI",
     levels: "PBKC?CD?CACCHHDC?BDAME@CBEBB?@@BBACC@?JEGDEDGDEGDDEGFDFO?A@IIA@BE?CADCBEEMABAD@@ABCB?D@B?AD@ACDDP",
     color: "#304006",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#304006",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon46);

var polygon47 = new GPolygon.fromEncoded({
  polylines: [
    {points: "yyssGfge_Qu@_{BR_BrzAUj|AQpl@Fhj@?tBawB}DuaMaAw`BqAq`Bx{A`A`yBoA`_AaBEuLFuGt|CcCnKWbGLvq@_ApQRniFQh@J~KKzbAFxgEFj_Ff@t{AJrbDYvCJtT@l]Qh|ATxuAOllCBD`_GtBv}LFl~@Bj`AUl~@_D|aS`{EEzGFdaFr@~yANJz_Ab@djLDfh@b@noCLrsALbd@Mv_@Iz}B[z~FCt|EKda@Gr}AFp`@afE]cRJmfIwAuyCAoXIafC]mQDk[Y{xAo@seMJcl@Nkl@?uyAOanGx@_zAh@{wABysAAAbb@ak@\\mm@RczABwdAAwu@Kyx@@mk@YefCFEsDFii@^epAUm_AY}}BZorDp@wyCVcrBg@gmMCcMg@{kBGcGSi_Ab@kuDBw|@MkuCFij@?s~@Py~@?iZWacBUy~@cAe~@",
     levels: "PBI?B?JEC@LDCFAGABBGBBAA@B?CBAABBANCB?E@LC@@K@B??@DA?BA@ANABBA@ACAEAB@CBB?GH@C@@@BBM@AC@CAADC?@@DBAB@@@D@CP",
     color: "#920889",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#920889",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon47);

var polygon48 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ehnsGtnukQmTlEF{N|PmL`BfEDrO",
     levels: "PFGGDP",
     color: "#f3d10c",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#f3d10c",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon48);

var polygon49 = new GPolygon.fromEncoded({
  polylines: [
    {points: "k`nsGnxvvP?wfBRo`B?_SR{aA?sjARgaAz@wsCRo~BS{h@?swBf@wtEScdCRsNRoi@SsoATs{BAyxAOcnCbR`b@rKhp@bKlMpKhD~K?de@yF~WeOz_@o`@xUiEpYHx]xTxSdVvVjGreAcPro@Ir[wI~QgJpJ{I|MaBzc@jM~R~W~MrXjMfJ|{@|Q|]|Aj\\wBpOaKrv@}lAjLZhh@fZ`\\lDp^MnUsD|tAcm@v|AiV~RiPbHmMbKyEvDJvLvDx^tZxFhJlWvn@hm@beAfh@ns@hz@nlBp~@hy@~JdGlLtCtZ^dUkEji@a^tTwVzUs`@dYyw@na@ys@n^_c@vZ}NrJ]|J|BnfAza@jo@nRfl@oAbd@eJl]bGfZGpi@kDnMsD|IiGlRug@px@ce@vwAwVtY_@~aDdj@~LdF~EhD|DdJra@nhA~FvDnKlB``@`AnP_E|j@cZbk@ea@zIqCvKz@n`@fTv[nKvo@iB`rAsShW?zLdDvRjSnVbQtInAlSwCfIvCfv@no@zRtEleAdHlc@~Ld[hUzb@jl@f\\vYhw@`^bz@~Klm@zB|EeC`KoS|HgFnI}AkMr{@wR~{ApV~|@|Cn}@Sn_@wLpVi\\dScNfT}HzEg{AzrA{Sn]I|KdJptAi@by@}Ilq@gJ`ZuPh]yF|a@fFbWhJpPpM`Lv`@zS~Mb[xEfWpA~^cBj^{F~]wUtx@{Ofw@uBfh@dBnW~Oxl@f@jWaA~OcFpT}KfWqXdS}r@tTcBSgEnAsIf@gU_Goh@w]ccA_{@sX{Jka@~HoUzJsl@zJo_@vG{_BoPgJg@_v@vB}OpGqNpMguAvQco@fTSwt@f@sISgOg@gJS_aCoZSsb@RsS^s]FsI?sv@f@gr@?wrARei@ReA?oFg@oPf@{T?kRR{fA?{^S_u@DgPEwBRk\\S}k@Pal@QoPf@_DS{sB?kMRuH?qESsN?_iD?gERwBS_DRox@g@kvBSsN?{c@S_oARkp@?Sz|@?jz@Sb[?ngASvB_mB{@ka@Rgh@Ska@?_NSgO?gbHwB_v@SknASg`D?}_AMszAEiv@?g^S",
     levels: "PA?@AC@BDABBCABBB@MEFDICFEEHFDEHEFEDDIFDEGEJEGHEFDHEFFDEDKEDGEDEGECJDFHDEEGEJDEDHEFECIDFFHEKDHDDFCIEGDDHDDGEEIEDFDEFGDEHEDFIDGDEDNBGFDIEEECEICEGEDEIDFDGEDIDEDGEDECIDGEMCCEGDEIDD@GBFGDFEJCCACGJAA?ACA@CACBADAB@BBAABCBBBAABBBBCB?AC@IAAABJBBABA@?DAA@?BP",
     color: "#55998f",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#55998f",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon49);

var polygon50 = new GPolygon.fromEncoded({
  polylines: [
    {points: "mthsGhcqkQbDqCfDqNyD{EfD}m@dFuF~WgFfIcZvD{ItPaSvBeTW_PcEaFyHupBcIec@fAcX`H_Q`HaAP_@lB_SoHoq@nD{F`GFvBsL}@kb@eCsMdC}h@|FaXbZal@m@qb@mGxAu@aD~EoIxFq@?sEgCI_KcMzI_NxIaF~Gd@rAi\\wAuCiMyA?}CdDqWbAiZQum@dKum@xJdApUtXzJtCbIe@~DcGh@kNpRcQbQ{Dpj@gYdE{HlEoo@_CuXcEoGm@qQrUyi@tEfDpA{A{CeOhBw`@jDcImCiM_HiGd@{KjIq_@CcH{GgZmEoGc@aFxGo[lHiJlGcFxSm]jTiHfQeQfF{JpMwk@~b@gwA~DyWlLy_@fJyIx@{h@rNcaBmEcOsZeh@}@oG|DoN~EaB|[cnA`L{{@xMue@fKeMr]wBdEsIlNcj@~QqPrKiEnIuW`Io[nBe]sBuKl@kMrZaeA`DsBtWuk@@iPsFoCkCqW`@cIhLy`@dWc_@zK^zYm\\~X}Up_@gP~@aEaEaM`{@_q@|JcCvJoGbAwFkAqT`HkZtQoUbPgCrBhCo@bBlW\\xCsHJwTjC_OvqAimAdiAalBnGoF`jHgaLz[skApLjHbDlA~]cXdEkZqDkE_HkTxE{IzMaCpYuMl[m@xAqQlVcRxGxElDsQRwArYgeA`S_b@bQiVq@_GvGKdEwGZgE~BbAlMmRQmFtCyAXbCzCeIlD{MvKiHp[sFb@zIlA^~OkJ~EnBxn@e@z]aCxKsFzGuIlBsH{BiRIkVpCuDvIwCfYcU~@vUlCrAlEuDzUqd@bMmeAcFmEmD^qBeGpSw_A~UiRlAuJ_AuOqEmJmBmAgSDiC_BMsEvU{i@bDsClDFhCaBz@{Q{A{KcEJeSnQyBk@?sB~BiLtO}\\kGuYx@qLvVaOjDeAvCdApKaMpEkO~YLpY?fyAh@roBZrUYMlAVzu@s@feCMx|LBzr@`{OtFV~~BZn~F?hyDCjk@PlW@xxBX`}Vg@jaCGtaCi@xrEK|h@Upt@BrBHxdAUxoC^dhB|@lbSqAj`U{oOxAufB]cXd@gdIz@c{Aq@mtKZ_p@K{GD}fG@cGe@ckDlAwGKqsIIgcD]{X^mvJ|B{@siC",
     levels: "PDEEGDGCEEHDDEHEEEAFFEEFDEGEGFEFDEFDGEDGFDEFCDEIEEDHDEFDEIFDDGFDGEDGDFDDFCDIECDFEDGDDEEHDGDDIEEEDHFGCFDFHEDDGEDGEEFDLFFDEGDFECGDEFHEDEHDDGGDDGHBGHFCEHDEFFFG?CFDEEECEEDEDDBIDFDFFDCHEDFCEHDGFDJFGDDFFEHDFDDHDFCCGDGDDGBDFDJEDFDH@@ABOABB@KK@B?AB?DAAA?D?BBBDNCCBDCAA@CDCAADBJP",
     color: "#b76212",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#b76212",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon50);

var polygon51 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_fdsGj{xyPrDox@lYibAlDaFrd@uRnZy\\~S__@zEwIlCkVcEsfA`@oOfFeSlQwV|H{TbKky@dJoa@gA{SeFaYjMwj@zEwLrN}ObGqDn}@{h@rN_Sni@oeBbQ{Yjk@gfAjRye@rSc|An{AwmA|_@ggAlTsf@zYo_@nFgTnFce@|DsKHObLsIrI{@bLwGzc@wj@zNaJjN}Lt^mErU[tXiHxKyOrG}VpLcSnPoZ~MoKvrA~HfEp@z^IbV{Ebt@fJ~MvGrXfJzh@nFrl@wQnn@wGfr@fOg@ccARw[?s~FSon@SkdAjp@{@z@Svj@g@ryAg@v`@?rv@RnU?bo@Rv[?rDSbj@Rbj@?nFSjHRfO?fESfJSj\\od@di@cG|l@R|Ta@hWm@fw@fE~\\hDvQeF~HoFnP{^z@cBzE_IjHsDb`@vBzEgEzJ_b@rDqs@z^nFf@nFrDrNfEbGjHoAzOcVnFkCbLzJzTrl@fYbQfc@t{@nFf@zJ{Jz@oAjMcBbm@hd@jw@|[zTfYvGzw@nPf@bV{JzOvo@~Mv[ni@rq@~u@rtAnKju@nKb~@bGv~@zYrSbGbVhAfHpHn\\z^rjAbB~Wz@vwAvGjRrXja@bB~MoA~M_Xfh@cBvQnF~Mz@RjWbQnAzJSbGsSbe@nU~xAwBrNkdAvVkHnPz@bVnFj\\gJnPw`@jf@_Nbe@gEj\\jCbVePb}@uHj]cGvV~CbLv[fJzJrIjHrXvBbo@{@jMgObQoA~MnKvhAf@zc@{KpGwFhG~Rni@?rN_DvB{TzOoFnKjCtNzY~MbAvKcAba@z@fOzO~k@sN?{kAz@sQHgo@H{uA?ckBg@_I?gJR{JSw~@?gEHkp@]{r@??fORziBRbt@SzTRbG?fc@S~i@?rZSr{@?jRS~f@Sr~A?fc@RnU?jMRvQ?rb@RbG?vpBRnn@S~u@RjRBvrBb@b_B?rb@RbGS|`ISb~@gtDSkxA{@gzASouDSsb@S_v@g@@d@quCfBghAB}fANmk@C}RFmk@Sw@MqPS}XwAaEPwa@wIm\\g\\cKuC{HtImIfDqCYa@YlH__@hDuVt@sMcG_cAiB_GuIcFcGsDwVkW{EoOyIeHyOFaYlDaDwQk]cB_fA}`@wr@st@{UmYc}@kg@c^_f@qMo`@uHqJy\\iS}FoP@e`@}EmUwHqNkBeVrEiQFiLm^qpAan@a{@ws@|@}EvCsTf^cEjRaNjTig@hc@qUhKgMg@uRuKyD_OYo\\eBoIoJoK}HtAog@ae@kDsP|D}NlZcHlHoGpDeOg@cXmBqFqIcDuFlCs@bDgGtE{EOcB{@gAwHfAeh@~Fmc@aMoOaKoD_DgThQaOdKRbCuXcZg`@{^bGkCRkDkPlVaJz@qNkXieAN{d@a\\}i@kXw|@vBgYq@gDi[kXUis@`BuFdM^tQsDdHeEdHyGdA_KsDgJ}IgIqHgAqLdGkDi@wG{G{IoRsb@{Ji@wBJcU}@kC{EuA}KfMu@`NcLfReHaBqCyB",
     levels: "PFHDFD?HEDGDDGDFCFIDE?EHFBDGGHCEFDD?KDDEECGDDHDEAEJBFDGECEGEGKBBC?LBACDA@@BBBABBAG@FFHC@ECIDFB@GEEHEJFBDHEDHEFEHEAEHEHFHENDFEHBDGFBADIDGDEGEEHEBEGDGKFFHDGDEGEFCAIEDFHDFEFDGCGEG?DHFGCCFKA?BDBBABBAAAK?@BABCA@@@A@C@@AACABCAAABDANCB@C?ECD@A@BGABBEGEGEDLCBCFDI?DEDGDGFEGCFIEFDHEEDFEDGFJDGDDFEIEFDDGEEJEGFDHDGEDDECGDEGDFHEFIGAHFFGFHEFCFIDGDFBEJDFDDFDFGCEDHEEFCP",
     color: "#192a95",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#192a95",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon51);

var polygon52 = new GPolygon.fromEncoded({
  polylines: [
    {points: "esqrGbtifQ]u}Jg@m_CyDqzVx@m~VltDd@piJRzxA`@bdF~Bh_Bh@p_Cn@tiJrApsDEJlgAB|{@XbjEM|^^nhK@jaC\\r~F\\n_IlIEpvDs@tbGt@vxA[xl@g@zwDLjuAw@rK|Xi@~IgFlNqd@`D_PYmHqCmO~@_[nToFh`@kHrT{A~FnCbMpKvI~McCbLnAfAxHoAlUeDtIwGx@yQyAsCbDCzL`Lt]TxKqEtSeFtGmGxBwGc@w@_\\aCaPmCiBcCV_FzIyDtBeShCuEeB{AaKBwdAyAyOkN}`AmBoC{ImC_b@bg@eIhe@cc@py@qAvXi@~_@Ft|@_Hjf@}ARaGeG}GaRg]g_@eC]mHGsErEsYxo@_Hv]eGhUmEni@cTn]eDfE_ItHgGrAmDHcJaGaGDgSjRkN~T{AbGlFhQq@jOcVxwBsBnGiDv@uQgTuEcCaDt@gG`Oi@hHtBpVtEh\\oCzV_DfHoIrHoJp@wRyHeLy@gTjI}[l]aEvXuEtImUfRsFv^vErJ_D|Xq_AlqAuD~A_DeABuXcFuJmIj@mMtLPxGzL|VuLx^wRrVmM~m@cKl@iFsFmNs@mL`HcKnU_PhVcCzUlBfCfC_@z@oPfEyCfVd]nFdMfAnLyKde@tA~sA}Onz@wEtMkJzLmCr@sCwXcCmD_YhKuWdBmFe@{@sGcBy@oi@zm@cW~ZGXoMxJuI`TqEjOqK`MwCeAkDdAwV`Oy@pLjGtYuO|\\_ChL?rBxBj@dSoQbEKzAzK{@zQiC`BmDGcDrCwUzi@LrEhC~AfSElBlApElJ~@tOmAtJ_VhRqSv_ApBdGlD_@bFlEcMleA{Upd@mEtDmCsA_AwUgYbUwIvCqCtDHjVzBhRmBrH{GtIyKrF{]`Cyn@d@_FoB_PjJmA_@c@{Iq[rFwKhHmDzM{CdIYcCuCxAPlFmMlR_CcA[fEeEvGwGJp@~FcQhVaS~a@sYfeASvAmDrQyGyEmVbRyApQm[l@qYtM{M`CyEzI~GjTpDjEeEjZ_^bXcDmAqLkH{[rkAajHfaLoGnFeiA`lBwqAhmAkC~NKvTyCrHmW]n@cBsBiCcPfCuQnUaHjZjApTcAvFwJnG}JbCa{@~p@`E`M_A`Eq_@fP_Y|U{Yl\\{K_@ZehEJevCNgrBb@mJTa|RRg{FQqc@H}g@?qrCBmLb@yoKFyyRXq}Be@e~B",
     levels: "PC@EMBDAA?DCN??AA@B?L?CCBCCHEMFEDDFIDAHEFDFHDGDEGDDGEDJEEDHDCFDHDFBDHFJEGBDEIDDEGBEIFBDHDBFBEDGDHDEFHDFCGDGDBFDIDFDGEHFDGEEGHDFEGEJDGEEHEEGECIGDEEGEDHFFCJCGDGEFEDHBADFBDFDEIDFDBGDDGDGCCFDHDDFDHEFFDDGFJDFGDHECFDEHCDFFDFDIBDDEDEECEEEDFC?GFFFEDHECFHGBHGDDGGDDHEDEHFEDGCEFDGEDNF?@CDABB@@?BBCP",
     color: "#7af318",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#7af318",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon52);

var polygon53 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{jlrGdt~wP?{c@R_XSoFRco@Rod@?{xGS{JRku@R{_B?w`@Rs~A?yyERc|A?sv@RgzA?wmARwB?ogARc[?kz@R{|@jp@?~nASzc@RrN?jvBRnx@f@~CSvBRfES~hD?rN?pERtH?jMSzsB?~CRnPg@`l@P|k@Qj\\RvBSfPD~t@Ez^RzfA?jRSzT?nPg@nFf@dA?di@SvrASfr@?rv@g@rI?r]GrS_@rb@SnZRR~`Cf@fJRfOg@rIRvt@kM~MwVjz@_Sz^g^v`@w[fJkq@tf@oJ`L?zn@S~a@?f_BSnZRbQ?rPgJC_IBg@C?z^rNRzE??nvARbuBzOfOb`@bGfYfOjMzJrD~H~MrXrq@n}@`IvUvZ`_BiD`e@{^oFsDps@{J~a@{EfEc`@wBkHrD{E~H{@bBoPz^_InFwQdF_]iDgw@gEiWl@}T`@}l@Sei@bGk\\nd@gJRgERgO?kHSoFRcj@?cj@SsDRw[?co@SoU?sv@Sw`@?syAf@wj@f@{@Rkp@z@RjdARnn@_SSkM?gER{c@g@cL?kRRgY?gYz@_S?wj@RsS?sl@Rw`@?cGR{E?gOSoA?sl@f@_l@ScVS_]R{r@nA?cQSgJ",
     levels: "PABB?BBCA@?BC@@ABBAAAM@CA?BCBBBBABABBCBAABB@BADABCAC@ACA?AABNCACCIEEGEEDIAAABAG?@JG@GAIEECH@EGDIGGELEEG@BFDHCE@CHFH@CABBABC@@@@DCABI?IBABACABC@@@ABC@?BB@DBGAP",
     color: "#dcbb9b",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#dcbb9b",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon53);

var polygon54 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{`pqGhmf~PXs_AjA{{FTa~BZwZo@ccEL_^CyhARcqDXa~DAk~Hpm@FnfCAnz@`@~}@RltCgApaAk@^ExSWFcKfWCrWMxHl@~YeAzbB`AxwAVbIe@nlDAve@Dfs@Ol^R`gBCb}@RbwIp@i@~xZmAjmNH`^LfkBlm@@rn@Fx_KdBzcA`@c@ztVXtcGx@jfDZjiBQjaFenGZcaD\\moBAex@@knCA{hAC_qGm@qzAKwnGz@cuDeAIz[_zAOeaFs@{GGa{ED~C}aSTm~@Ck`AGm~@uBw}LEa_GGc|@",
     levels: "P@ABDCAA?BM@B@D@F@FF@CCFBDC@ACABANCB@K?AALDB@CNAB?C?B?CDGG@@CM@E?BC@P",
     color: "#3e841e",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#3e841e",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon54);

var polygon55 = new GPolygon.fromEncoded({
  polylines: [
    {points: "kzoqG|{z{Pf@_eFRc|Af@o`GnuDRfzARjxAz@ftDRRc~@R}`IScG?sb@c@c_BCwrBSkRRwt@Swo@?wpBScG?sb@SwQ?kMSoU?gc@Rs~AR_g@?kRRs{@?sZR_j@?gc@ScGR{TSct@S{iB?gOzr@?jp@\\fEIv~@?zJRfJS~H?bkBf@zuA?fo@IrQIzkA{@g@j_ASr`Abd@SnL~RzEbVwLzTsIrNg@zE~RvhAbBni@jElXrF|JvLrFjg@RdPzD]jSwGj\\tCvq@p@rGvBnAbGoAzOgYvGsDrDg@nKjHnZv`@fJnd@bBzh@jC~MnPr]jCjCrNRnAcBfOct@fJsSfJkCrIfEbLnKnFjM_BnDcNfLwGbLcBrIvB~CvQg@jRfEbLhHpRjWxR`SbIl@zWeN`I_BpE`BdXvWjLMlCeKqAsQ~EyQ|XnJzJInI{Chj@gm@hCu@`Qxf@lm@dhAxWrZh@rIRjHgLfXm@zLlV`K|CxFdBjNmEjHcNvDiLhIeDbM~Efc@fOrj@hHxObV~CrHlGnfB`sBxCfShA|x@fS`v@nHnIhHiArSma@dGMzOpf@sDzVsCfO`@dD`RtFbj@`n@vD|z@zE|k@QtYxAdFhD|AdJqAnFeEnNyUfQpGsAf\\kAVwBz@}Xb]e@rGgx@?oWMo|BLNd_QBb{@?h|@Slx@gzA?{tDg@o@b_MKr{@PnzFcwIq@c}@SagBBm^Sgs@Nwe@EolD@cId@ywAW{bBaA_ZdAyHm@sWLgWBGbKySV_@DqaAj@mtCfA_~@Soz@a@ofC@qm@GlBidU?o}@f@c}CcBsX",
     levels: "P?@K@BCKADBAAACBACAA@@C@A@@@ACBAB@?KAAABBABBDB?NAHGDGADGEDHDFDHDFBJDEDFDHFDDFCIDFDGEHDGCDCHDDFDCIECGDEHDDGDGDCKEEHAEDGFDHDDEGDIFEFHDFHEGEIFADGEGCDDHDFDFLF@DEHAAJ?BAJAJ@BMABACA@CDBFCC@FF@F@D@B@LAADP",
     color: "#a04ca1",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#a04ca1",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon55);

var polygon56 = new GPolygon.fromEncoded({
  polylines: [
    {points: "sxfqGnrhgQFYbW_[ni@{m@bBx@z@rGlFd@tWeB~XiKbClDrCvXlCs@jJ{LvEuM|Ooz@uA_tAxKee@gAoLoFeMgVe]gExC{@nPgC^mBgCbC{U~OiVbKoUlLaHlNr@hFrFbKm@lM_n@vRsVtLy^{L}VQyGlMuLlIk@bFtJCtX~CdAtD_Bp_AmqA~C}XwEsJrFw^lUgRtEuI`EwX|[m]fTkIdLx@vRxHnJq@nIsH~CgHnC{VuEi\\uBqVh@iHfGaO`Du@tEbCtQfThDw@rBoGbVywBp@kOmFiQzAcGjN_UfSkR`GEbJ`GlDIfGsA~HuHdDgEbTo]lEoi@dGiU~Gw]rYyo@rEsElHFdC\\f]f_@|G`R`GdG|AS~Gkf@Gu|@h@_`@pAwXbc@qy@dIie@~a@cg@zIlClBnCjN|`AxAxOCvdAzA`KtEdBdSiCxDuB~E{IbCWlChB`C`Pv@~[vGb@lGyBdFuGpEuSUyKaLu]B{LrCcDxQxAvGy@dDuInAmUgAyHcLoA_NbCqKwIoCcMzA_GjHsTnFi`@~ZoTlO_AlHpC~OXpd@aDfFmNh@_JsK}XYo@_RuZIsD~GaTz}@c~@fUa\\lBgHwQq_BlCmNpHmMlKa\\BmWdTi_@pXwH~AgP{@sAmMJmCmLlWgs@rl@weAzCQpHxHfLxFzc@_UhQug@fC_ZkA{N_HeJFsEpAmAvMXxO`OhCyAdKeTtTg`AiIqRHmIxQmS~dDrCvi@mAbgCHtyACzzAJnXWzu@CfIYryA_@dVZ~\\?xyEJFl|J]r|AFb`F?v_DGh^OjuDm@tcAg@jaIu@|y@irBIgSQ{yKq@mBf{F`B~`GYz_GO~}B_C`~NNjxAE~e@Mb|HHv`AQvpCX`kFdCn|Fk@~xIk@d}CsAz{FUn~BHhXi@d|@DxfBIdgAM|xBRb_C\\|yAv@naHL~}@Pj~@Gf~@a@veAe@ltIWlaDOhkEs`Mk@g~A}@kfGbA}Fg@ayAn@gxAh@kJJw`@Kqo@u@pAk`U}@mbS_@ehBTyoCIydACsBTqt@J}h@h@yrEFuaCf@kaCYa}VAyxBQmWBkk@?iyD[o~FW__Ca{OuFC{r@Ly|Lr@geCW{u@LmAsUXsoB[gyAi@qY?_ZMtIaTnMyJ",
     levels: "PABHDEFEGDGCICFFHDEGEEDGJCEGEEHEEGDHEGEFDHHEEGDFHEGDFDIDFBDGDGCFDHFEDHDGDEBFBDHDBFIEBGEDDIEDBHEFJDFFDDHDFCDGDEGDEJDFDGEDGDGFDFEHADIFDDEIDF?DDHEEDHHDDEGFGFDFIEHDCGHEFDDGDEEHDFDFLED@@CABBDB?NBB?B@DBCLAAKDD?BDB?AABDEC@BABEA?CAA@?DAB?@OCDCC?@DALDBBB?D?AAAD?BA?B@LK@BBAJBA@@HEP",
     color: "#021524",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#021524",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon56);

var polygon57 = new GPolygon.fromEncoded({
  polylines: [
    {points: "w`eqGrxdwPf@B~HCfJB?sPScQRoZ?g_BR_b@?{n@nJaLjq@uf@v[gJf^w`@~R{^vVkz@jM_Nbo@gTfuAwQpNqM|OqG~u@wBfJf@z_BnPn_@wGrl@{JnU{Jja@_IrXzJbcA~z@nh@v]fU~FrIg@fEoAbBR|r@uTpXeS|KgWbFqT`A_Pg@kW_Pyl@eBoWtBgh@zOgw@vUux@zF_^bBk^qA__@yEgW_Nc[w`@{SqMaLiJqPgFcWxF}a@tPi]fJaZ|Imq@h@cy@eJqtAH}KzSo]f{A{rA|H{EbNgTh\\eSvLqVRo_@}Co}@qV_}@vR_|AjMs{@ho@syA|o@qgCbc@uw@rEmP~B_X`^{oAhSm]|kCTj^Fl\\Rrw@GpEGjnCTfLD~p@Snw@_@@`_AC|m@[viCg@p~BvzDwBbR?djBW`p@Ove@RnZ?jlBf@z@fh@S~H?fm@SvkBSfm@@npHPzy@GraBFrZSjM?b`@~tCg@hJf@EdNj@pBfJbGnUz`AzChUS|g@`Uh|@yLjPyOx@eTl\\aAjN`Bri@bShs@yCzF_RhGiHlHsEnOoGtfBxBzNrJj@|IbXdFpi@]t[qErQe@xO`Nbs@yAnR_FlI|_EInqAKOdlAL|gBAjfALh~B|B|{DI~~AKr~@@jMCrJB|AOjc@CpQD|M?hw@Qr|B?d~@PdpA_B~fHQ~`AszAYueCS_yA?keCg@?{TgsBf@{^bBkiK@RvzBIj\\H~}Ayj@Oqq@Noi@{@_yA?gzARc[SkMSsyA?kWSobAg@?~_A{bCz@co@?kvBSsNRwo@SwVfEw`@Rce@f@wGkR{@wwAcB_X{^sjAqHo\\iAgHcGcV{YsScGw~@oKc~@oKku@_v@stAoi@sq@_Nw[{Owo@cVzJoPg@wG{w@{TgYkw@}[cm@id@kMbB{@nA{JzJoFg@gc@u{@gYcQ{Tsl@cL{JoFjC{ObVkHnAgEcGsDsNg@oFhDae@wZa_BaIwUsq@o}@_NsXsD_IkM{JgYgOc`@cG{OgOScuB?ovA{E?sNS?{^",
     levels: "P@?GABAAAIDEEGEEKEFDGFBG@DDIEDEICCDEKECGEFDGDEDHDEGDFDIEDEGECJECEEEIDFGBIFFFDDKGA@B@B?C@N@B@KC?@D@AKCB@ACAB@AAJCICEEFDFIEEHDFHDDEHFEFFGDDFFDK@KB@@DE?@??AA??ABAC?NA@AGFDDJAAJACCAC@BB@HIC@BAEEAMEDGDABFGDBIEFDHEGFIEGEAEHEFEHDFEJBEFDHE@GCEEIAG@GP",
     color: "#63dda7",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#63dda7",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon57);

var polygon58 = new GPolygon.fromEncoded({
  polylines: [
    {points: "u`_qGzedbQh@eh@F}RKyc@EyxAh@k{RGq`@Fs}AJea@Bu|EZ{~FH{}BLw_@Mcd@MssAc@ooCEgh@c@ejLK{_AH{[buDdAvnG{@pzAJ~pGl@zhABjnC@dx@AJj^b@f^p@p{PQzzDvuDYnuDSluDmA`~OV?s]jyOYRj}AQb_@K`w@YrcICdHGjdA?bcBKf|@TlFPpmB[bXm@dxAwDvEzGnj@u@|H{N~Uo@K}GgDiAxAqW`o@kCbZoClC{BmChCqPgCyPeGuJqGpAbJjIPrJyDhUeNjXcO|GcEkBej@jKuUfcACrEtCvE_LdVqPvT_Sf`AlCpb@lCvDpCe@hBdDM~R_IjGgE?wF}OcDyB{DjBCxG`ChNoAjk@gPdN{Evc@kf@vHiTpYmd@pEmJjK_CvI^~IzI~MxKxDlBpCbC~Gm@xJyE|CmOkHwMvF{E~IcEjS_@v[fNjCzG~U~En|@_CdZ{EhU_U~B_G|J{LfThAvY_Np^~CjUQvIqR|y@wSpTqC`|@cEfMiCEkGqGmH_CeHp@qDfFc@pKbLjNnGpCk@pGcPlBUdr@uAJsFmHoCxJRzOmT`JoANnCdb@a@jCiBfFgHhP`Nz@tLxRwIxEgFHkIbNd@dAxHeA|F|Ax@dWlGjWGrEIpAaPvGcF_CuEqHqEmS{G~B{DpQHxJ~N~[sTbQvC~QfDrEc@dEmUvWqDeBqDuD[I_FdGtBj|@_J|g@qZ|w@wHJyLqGwF~D_Y|u@kKfn@bJhRzJrN^v@WxVmAv@gErDw@~DB|`A}DxHuHeAeIwHmCmHcDq^qBkHmEyB_C~J{@j[pGdQ`AdM_PxHeQRqUxOc@~ElFxJLdGmPdf@gQlJiPdGcOhj@BvL~IxEzApEmErQ{HjC_NJ{ElCmc@|kAmf@vZwb@~x@iNxj@~Nrk@UxImFxQgLyD_FvSm@`ZwCjE}RdEus@ddA_Zzm@cFxZ_Xrl@gb@x\\qE`HIdIbErGQvBqY`a@uKfEuLxNoAlJk@pGuCrAmRDmOzWD~YfPdc@tNrHxNhhA{JleCfAtUkA~FiOgAuClAeZxz@{i@`s@qJ~Cg]^mSkJiH_Au_@rWuDl`@tGri@gR|x@qFrq@bBrQ_Bnh@cMzd@yQlSIlIhIpRuTf`AeKdTiCxAyOaOwMYqAlAGrE~GdJjAzNgC~YiQtg@{c@~TgLyFqHyH{CPsl@veAmWfs@lClLlMKz@rA_BfPqXvHeTh_@ClWmK`\\qHlMmClNvQp_BmBfHgU`\\{}@b~@_H`THrD~QtZXn@kuAv@{wDMyl@f@wxAZubGu@qvDr@mID]o_I]s~FAkaC_@ohKL}^YcjEC}{@KmgA?{u@FaoCLy|BKw|@DoRAkh@K}`A?_m@Iyq@Q{`DI{i@@eqALmm@EydICes@Y_sAUm~BDul@EyP@_~DWgwB{A{rHMuW",
     levels: "P@C@BAC@AA?AD@??B@ANCC?B??LACBK?CDGGNB@B@?A@CBEAEEDKFADFEDHDEFEHEFDHEEIEDFDFGFDDEGDFEDHCDFFHFFEIDFEDBGDFFFDHFFFEHFF?GEECFFFGFCDFDGEDEGFFDFDFBHFBCGEGDEGCDFDD@HFDEFHDFGGDDGFBAFGFHGDEFHFCAGEADEJFDGDEDIDFDGEEHDDFGCFGEDFHDDGFFHFDGFFDHDFGDEFDFDDGEDFAFDFJFEFGDDJDGFHDFCGIEFFEDGEFDFICGFDGDDFEHGCDHIGFDFGFGEDDHHDEEGD@NCCBCC?L?B@AA??C?@B@@?@A??C@A?D@B@@CA@P",
     color: "#c5a62a",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#c5a62a",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon58);

var polygon59 = new GPolygon.fromEncoded({
  polylines: [
    {points: "wdopGd|gyPtHk]dPc}@kCcVfEk\\~Mce@v`@kf@fJoPoFk\\{@cVjHoPjdAwVvBsNoU_yArSce@RcGoA{JkWcQ{@SoF_NbBwQ~Wgh@nA_NcB_NsXka@be@g@v`@SvVgEvo@RrNSjvBRbo@?zbC{@?_`AnbAf@jWRryA?jMRb[RfzAS~xA?ni@z@pq@Oxj@NI_~AHk\\SwzBjiKAz^cBfsBg@?`aMRj|D?~jCRr|B?nmCMxyAt@`zFRzESncC?nhCRxt@?~|@Sng@?bo@Sbt@SzJRrS?byESncCR~wInAn{KSf}BRn}@RfiB?xdCRbmADd`Am@lzC?vbDcTrBiN}JaLkPyFeW~@qNjK_JbIKlKlEzD?pCcC^gL{CmU{EiJ_N}@{SrBeHlJgCdLUdW{D`DcYiFkNyF_NuRoFaT{Dy@uOfQgAlIrAzKk@zOcH|DqEy@cGcIcGw[w{@iMqC\\qDzEyG~RwLfBu\\sc@mOuK|GmLfA_IqAqN__@m[u[uBqFsLs@_RxAqAnKUtImJs@aMaQyk@wkAel@_GvFoBfRqClBqAcBoGcu@t]mf@}B{IkGiA}Wt\\gIGuBeEzE}XjOkKhUsGbByEcaAgqBiE_FcSyFgBuGHkh@cH}Z{@{WhDoVtGaMrIgDbIYcDeX}Kej@yI{O{VcUHiJpFgElKu@jP|EdGo@oR_k@yDoLgWzQqBvFlDzS{BxF_DyAuD{Xd@sG|Xc]vB{@jAWrAg\\gQqGoNxUoFdEeJpAiD}AyAeFPuY{E}k@wD}z@cj@an@aRuFa@eDrCgOrD{V{Oqf@eGLsSla@iHhAoHoIgSav@iA}x@yCgSofBasBsHmGcV_DiHyOgOsj@_Fgc@dDcMhLiIbNwDlEkHeBkN}CyFmVaKl@{LfLgXSkHi@sIyWsZmm@ehAaQyf@iCt@ij@fm@oIzC{JH}XoJ_FxQpArQmCdKkLLeXwWqEaBaI~A{WdNcIm@yRaSqRkWcLiHkRgEwQf@wB_DbBsIvGcLbNgL~AoDoFkMcLoKsIgEgJjCgJrSgObt@oAbBsNSkCkCoPs]kC_NcB{h@gJod@oZw`@oKkHsDf@wGrD{OfYcGnAwBoAq@sGuCwq@vGk\\\\kSeP{Dkg@SwLsFsF}JkEmXcBoi@_SwhAf@{ErIsNvL{T{EcVoL_Scd@RRs`Af@k_ArN?{O_l@{@gObAca@cAwK{Y_NkCuNnFoKzT{O~CwB?sN_Soi@vFiGzKqGg@{c@oKwhAnA_NfOcQz@kMwBco@kHsX{JsIw[gJ_DcLbGwV",
     levels: "PBFEGEDGDHFFIGDGEBEHEEGEKAEEAB@CIH@BB@CACCAJAAJDDMBAABACBDBAABAAACBADBBB@AA@CBNFGDHEGDEDGDEIDGEDEHDFDDHFDDEHDEGHDDEIDGDEGFEHFCEGDHGEEDKGFHEFEHFDDHFDEHEDGDFDHCFDHEFDDH?HFEDGDHED@FJFDFDHDDCGEGDAFIEGEHFDHFEFIDGEDDHDFGDEAHEEKCDGDGDDHEDGCEICDFDDHCDCGDHEGDFDICFDDFHDFDEDKBFDHDFDHDEGDAHDGIAFHFCCGFHD?GEGCGDGEEHEGDGEP",
     color: "#276ead",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#276ead",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon59);

var polygon60 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_~|oGvrd~PIa^lAkmNh@_yZQozFJs{@n@c_MztDf@fzA?Rmx@SsxTn|BMnWLfx@?tDzX~CxAzByFmD{SpBwFfW{QxDnLnR~j@eGn@kP}EmKt@qFfEIhJzVbUxIzO|Kdj@bDdXcIXsIfDuG`MiDnVz@zWbH|ZIjh@fBtGbSxFhE~EbaAfqBcBxEiUrGkOjK{E|XtBdEfIF|Wu\\jGhA|BzIu]lf@nGbu@pAbBpCmBnBgR~FwFvkAdl@`Qxk@r@`MuIlJoKTyApAr@~QpFrLt[tB~^l[pApNgA~H}GlLlOtKt\\rc@vLgBxG_SpD{EpC]v{@hMbGv[bGbIpEx@bH}Dj@{OsA{KfAmItOgQzDx@nF`T~MtRjNxFbYhFzDaDTeWfCeLdHmJzSsB~M|@zEhJzClU_@fLqCbC{D?mKmEcIJkK~I_ApNxFdW`LjPhN|JbTsBzI?~P~HnDwBSsS?cGS_]zEkEvNmDpPvFdHy@jCsElEyR`K{OgAeb@fDuGjm@_NfC?xGnJxFfBzVfAdYkBfNHfCpCrAf\\jKl`@pBVpBmDGkEyG{OzCwLzEkG`Lg@`FtA`PfYfNxBxDrDvH~^xEhM|DrB~]Afp@fPhHzDdEtG~AbTyN|m@OlIfArEdX|XlHhGhA[vA}h@xDiI`QkOlGNn@`\\aEfC_AdF|BdAxIaJzGbCfCrAn@hFNf[wCbIz@pB`E^xEoKXxsN{@lqQKjaBv@txDWjdB_@hZQfAz@n{BMr}@V~aBUjpAIjIDfwBEjhMDxgHUjPXxm@Hbh@BjsAP`_ABt|Bb@|mD]tgEK`~@dBr{HQdZX|aB?z^_@n~GkyOX?r]a~OWmuDlAouDRwuDXP{zDq@q{Pc@g^Kk^loB@baD]dnG[PkaF[kiBy@kfDYucGb@{tV{cAa@y_KeBsn@Gmm@AMgkB",
     levels: "PABBC@KAJBJAAGDHDEFN?HDDFEHDFCGDFDGDEHEDFHDDFIEFEHFGHDEEGHDGECFHEFGEDGDKEDDHGEDHEDDFHDDFDHEDEGDIEDGDEDFGEHDFCEJE@@GDFDHCDFEIFDDFDCJDEHDEDEFEHDEDFCHDEDHDFDGDBHDFDEIEDGDEAGCDDGELC?CDCACBBD@B@@BD@BA@AC?CCB@BNGGDC?MBCAKAAKC@BDLAA?IP",
     color: "#893730",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#893730",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon60);

var polygon61 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{d|oGlx~tPboA}vBxl@qkA~YyZzl@k}@|sBkgCrNeVvPk_@jw@csCv}@y_A|\\gKb^?rb@nPnPxCpNc@`SuIjLmTbFsTkCkm@jAeb@fe@adAnYmI`IcOj@kHgEoReReP_FsIpAgY|E}T~IyLri@eg@juA{cAlTcBrIpA~NjHnJ~@jOuHlF{J`DeVu@uVkf@sqAiIkg@BwNbTec@fHyVrYm|A[ySsJ{b@i@iVfSobAtRk}A}DwxAuOym@w@mLjFi`@~Nu^pIcb@zKwaBvBa_AiHs`Cp@ki@dJevArRqfAlRkk@dd@ww@dNcOb[oSzx@iSvY}P`\\uZjF_BnLsBnoAbBtSuCfn@y^ll@ge@no@_u@jX{a@bt@mxAbb@wrAvOeYdO_Qe@dhEAfl@Mt`@Hlg@GlBWdzAUrcAO|fAkAroNZlc@Ln@QjwAfUeAj|C^|X?|pI`@HzwMEr}@g@tuE`zAXxaHJ`Y\\jeCr@bm@CpNcAb@DzFEzXLzrEm@jz@VboDL@tg@DzFIj}BqB`lAr@xx@w@zKXbFm@|}@c@`aCIjo@IxXU~zCN~l@I~YC~c@W~{B_@|{DQnwBs@zkB_@d|@eAngDM~mDSdpNP|uGpAvF{A|JK`hAF~CC~}Bz@~bCF~uBkiJ}@{rAVI_@q[QmcASq`PeAqtCm@w^@ka@EurCKaqDuA{OKegAGoqAJ}_EH~EmIxAoRaNcs@d@yOpEsQ\\u[eFqi@}IcXsJk@yB{NnGufBrEoOhHmH~QiGxC{FcSis@aBsi@`AkNdTm\\xOy@xLkPaUi|@R}g@{CiUoU{`AgJcGk@qBDeNiJg@_uCf@?c`@RkMGsZFsaBQ{y@AopHRgm@RwkB?gm@R_I{@gh@klBg@oZ?we@Sap@NejBVcR?wzDvBf@q~BZwiCB}m@Aa_Aow@^_q@RgLEknCUqEFsw@Fm\\Sk^G}kCU",
     levels: "PDGDDDHEIFHEDFDIDFDGFEHDFDGDICEHEDDGDKDFFDHDEHDDGDGFDHDDFGEFDGEKFDHFDDGDDGDIDFEEDN@@AAA??BCACKDA?KC?LBCBDCC@@BDAL@ACDDCBB??CBB@?@?C?@E@BDDDCABBNBCB@CBA@?C@DA@LDFFDDGFFEFHEDDHFDHEEIFDFEECICJAA@BACA@BCLA@D@?CJ@B@K@C?B@B@AP",
     color: "#eaffb3",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#eaffb3",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon61);

var polygon62 = new GPolygon.fromEncoded({
  polylines: [
    {points: "odyoGd``eQbM{d@~Aoh@cBsQpFsq@fR}x@uGsi@tDm`@t_@sWhH~@lSjJf]_@pJ_Dzi@as@dZyz@tCmAhOfAjA_GgAuUzJmeCyNihAuNsHgPec@E_ZlO{WlREtCsAj@qGnAmJtLyNtKgEpYaa@PwBcEsGHeIpEaHfb@y\\~Wsl@bFyZ~Y{m@ts@edA|ReEvCkEl@aZ~EwSfLxDlFyQTyI_Osk@hNyj@vb@_y@lf@wZlc@}kAzEmC~MKzHkClEsQ{AqE_JyECwLbOij@hPeGfQmJlPef@MeGmFyJb@_FpUyOdQS~OyHaAeMqGeQz@k[~B_KlExBpBjHbDp^lClHdIvHtHdA|DyHC}`Av@_EfEsDlAw@VyV_@w@{JsNcJiRjKgn@~X}u@vF_ExLpGvHKpZ}w@~I}g@uBk|@~EeGZHpDtDpDdBlUwWb@eEgDsEwC_RrTcQ_O_\\IyJzDqQzG_CpElStEpHbF~B`PwGHqAFsEmGkWy@eW}F}AyHdAe@eAjIcNfFIvIyEuLyRaN{@fHiPhBgF`@kCoCeb@nAOlTaJS{OnCyJrFlHtAKTer@bPmBj@qGoGqCcLkNb@qKpDgFdHq@lH~BjGpGhCDbEgMpCa|@vSqTpR}y@PwI_DkU~Mq^iAwYzLgT~F}J~T_CzEiU~BeZ_Fo|@{G_VgNkC^w[bEkSzE_JvMwFlOjHxE}Cl@yJcC_HmBqCyKyD{I_N_@_J~BwIlJkKld@qEhTqYjf@wHzEwc@`eGUvyRxBniABzcEXlyAApyAi@KvnCH`lBH|xCIz_BUf}@k@|{D\\fxF[t}BjChsFTjcCbyAb@xtK`Ebm@b@q@z|@G~MA~qBe@tyDP`aBn@daFc@fu@GteAEvsDB|CWr_EUn}BQvsDWh|BTlx@y@xaEMp|FHv`AB|~@\\xs@LtfA`@`oPGteAmyAFczAQizACcl@?cl@KqyA@wzAFcuDf@gzAf@mbAR_VLwzACqyALuyAFizALczAQuyAc@_zAf@mzAZqyA^gzAT{k@EqHPoMx@kPi@{n@Sq@X_k@J_yAo@gkAxAf@kaIl@ucANkuDFi^?w_DG{|E\\{_BGm|JyyEK_]?eV[syA^gIX{u@BoXV{zAKuyABcgCIwi@lA_eDsC",
     levels: "PFDEEFEIGCFDHFFDEIDGFEFJFDFAFDEGDDFDFEDGFDHDFFGDFHFFGDDHFDEGFCGFDDHEEGDFDIDEDGDFJEDAEGACFHFEDGHFGFABFGDDGGFDHFEDFH@DDFDCGEDGEGCBFHBFDFDFFGEDEGDFDCFGFFFCEEG?FFHEFFFHDFFFDGBDEFDMEFFGICA@CBNB?CA@CBECK@AK@CAC?DB@@B@@@BBBD?AACANAA?@A?DA@@CA??CAD@?BADADBCBCDLBB@C?ABL?BDBBAC@@DEP",
     color: "#4cc836",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#4cc836",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon62);

var polygon63 = new GPolygon.fromEncoded({
  polylines: [
    {points: "a`loGnfcjQHegAEyfBh@e|@IiXTo~BrA{{FjtDnAfzAeAtOZziAQbqD@bAmoAt`Dg@leDQvO@luDB~bDkBptFOdHe@b^p@b`BBhbPCly@IbhIkBzTPtgAYp~@Ds@xtFa@nvFIncDc@`aBChcASpz@Wr|CDx~E?bhDT|zAAxQPrlCBb_BLj^~@tjOqgJSiCs@qtAIyQ?abAp@sQWweA_@iIS{rAXaGW}mAXcLMmmAKyHQoR\\oz@Ca`@MarCOsd@KacI]{tBUm`AnAqLQgrE]_~@De}@l@cgBk@gBYq|Oa@aBHNikEVmaDd@mtI`@weAFg~@Qk~@M_~@w@oaH]}yASc_CL}xB",
     levels: "PACBABLDCBAIHAB?DCCDC@D@CBAMB@BA@@E?CA@?AANCCCACAACABCAABBC@@A@DDBCBDBCAM@?BAD?@ACAP",
     color: "#ae90b9",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#ae90b9",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon63);

var polygon64 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{}koGzaphQPwpCIw`ALc|HD_f@OkxA~Ba~NN_~BX{_GaB_aGlBg{FzyKp@fSPhrBHt@}y@fkAyA~xAn@~j@Kp@Yzn@RjPh@nMy@pHQzk@DfzAUpyA_@lzA[~yAg@tyAb@bzAPhzAMtyAGpyAMvzAB~UMlbASfzAg@buDg@vzAGpyAAbl@Jbl@?hzABbzAPlyAGtBfzH{CnrJMhdADvx@y@xaD@nBUhzC`@txDc@naAWbnKPjWY~mM?|e@H|uA?dbA]h|AFbyAb@fcAT~o@q@`gCWx_Cq~@EugAX{TQchIjBmy@HibPBc`BCc^q@eHd@qtFN_cDjBmuDCwOAmeDPu`Df@cAloAcqDA{iAPuO[gzAdAktDoAj@e}Cj@_yIeCo|FYakF",
     levels: "PAA?BDB?DDMAAHHHCBCBDADAB?@EAC??AC@@AD?A@?AANECABB?ECBBBA?@BCB?DANABC@D@CDCCD?BAHIABCDLBDCP",
     color: "#10593c",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#10593c",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon64);

var polygon65 = new GPolygon.fromEncoded({
  polylines: [
    {points: "c~znGljpxP?qiEjeCf@~xA?teCRrzAXP_aA~A_gHQepA?e~@Ps|B?iw@E}MBqQNkc@C}ABsJAkMJs~@H__B}B}{DMi~B@kfAM}gBNelAdgAFzOJ`qDtAtrCJja@Dv^AptCl@p`PdAlcARp[PH^zrAWjiJ|@?`^J`~ABnyJDr{FHdWj@r|OSbSL~_AEheBBfsACjoCFvk@Ar}AKpJFv~DOxjELbjJBxAL~vDh@vhDc@|EZpMm}F_@skAv@{Zm@oiCb@{I?ma@YsUd@{{C_@w{Aw@kvB]sPSihCs@cbGx@uIC_|BMewC_@ydBEgjAHquAG?S_DS_yAR{oD?RwnCS{Eu@azFLyyA?omCSs|B?_kCSk|D?s`F",
     levels: "PJA@AK?CABA??AA??@?ED@@BMB@C?@ABC@BCBN?A?B@CBA?@AAAAABC?ACBNCCCB@CDBBAADC?@B@@CBCAMCBBABAAAP",
     color: "#7221bf",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#7221bf",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon65);

var polygon66 = new GPolygon.fromEncoded({
  polylines: [
    {points: "g|znG~e|zPS_xIRocC?cyESsSR{JRct@?co@Rog@?_}@Syt@?g}BzoD?~xAS~CR?RpuAFfjAIxdBDdwC^~{BLtIBbbGy@hhCr@rPRjvB\\v{Av@z{C^rUe@la@XzI?niCc@zZl@rkAw@l}F^FzIB|qGFdzAPfXIvyC_@h_AD`n@O|bALh\\]t{CGbRN`a@Fr{Kh@``CmaFW{k@?P`}Pw@rjAVpbAGj@KrAAv^Wl~@q@t~CD~f@DrBt@ppBC|Ad@f`@?fW_AnrABjBNntD~@v}@kBLoAhFFtWzB~KeBdMgDlCmDSmXc\\qO{Kb@oLvKaSeHwGkMNqLlGg_@df@eAtLjJpXCjKwCfCuIa@cOeOmKqQmLga@yFwCsLTyC}CeD{RaDmG_Dv@kIp]uHaBcMqN{Iw_@Nii@oLeFeTeCqPkF}JmFeScWgCi@eMvFaDsJiHc]oIkUsAsg@wEaGaVsOmO{Yo@{f@{y@{_@{UaVsFg@eAF}OjLsXaKeJmL[kXsBeE{JgDaDXeRbMsFj@wLeHqCmMlAwGvJqM_@sFaA}BoOqGeKsJqDWg`@|VyMhR_N~YsCdb@_GnZcH|I_J~DmHY_W_WeApOrKnF|CfEcOrYuYpByUyi@mGwBuUjHsChDaK~]eE`DsEAuF{LqBmQRkIxEeQwQwCqNlLgGhN`@nZ|GfVqMU}DsG~Beu@kEkUmFoImQcFsLF_j@jMiOrNmTuVwCcJs@iOzCc]oB{D{UaGwVqAqOmIwb@uNk[y@m~@q[_J}@qKlAkNxVmF~CeG{CwFw]wSrHyEnKaE_@{@qBvCcIOg[o@iFgCsA{GcCyI`J}BeA~@eF`EgCo@a\\mGOaQjOyDhIwA|h@iAZmHiGeX}XgAsENmIxN}m@_BcTeEuGiH{Dgp@gP_^@}DsByEiMwH__@yDsDgNyBaPgYaFuAaLf@{EjG{CvLxGzOFjEqBlDqBWkKm`@sAg\\gCqCgNIeYjB{VgAyFgByGoJgC?km@~MgDtGfAdb@aKzOmExRkCrEeHx@qPwFwNlD{EjER~\\?bGRrSoDvB_Q_I{I??wbDl@mzCEe`AScmA?ydCSgiBSo}@Rg}BoAo{K",
     levels: "PBABCAAACAALACBC@@B@?CDAABBDC@BCCCN@BACBAAAB?CABK?JDBC?B@?DA?@BCAD@CEDEDDNDFDGEFIDFGEEDIEFDFDDFCHDFIEFHDDFDFDHBCEGCEFHEGAEFGEDGDFDFHEDDGCDKDEGEDEHDFHFCFIGEHFCEDHDFCGIDGEFJEFDHDFEHDFDDIDECEEGDFDGEGEEIDDCGAEDFDEIEDFDIBDGDFDHDEDHCFDEDHEFEDEDHEDJCDFDDFIEFDCHDFDG@@GEDLBD@AA@BBP",
     color: "#d3ea42",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#d3ea42",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon66);

var polygon67 = new GPolygon.fromEncoded({
  polylines: [
    {points: "opqnGpc}aQByGzDkBbDxBvF|OfE?~HkGL_SiBeDqCd@mCwDmCqb@~Rg`ApPwT~KeVuCwEBsEtUgcAdj@kKbEjBbO}GdNkXxDiUQsJcJkIpGqAdGtJfCxPiCpPzBlCnCmCjCcZpWao@hAyA|GfDn@JzN_Vt@}H{Goj@vDwEhDiBbEi@zBlAfAh]hFpF~ED~K{e@lPwSf@wFqCiYzAeT~CkDdNxAxAkC@oXeQkVoGoR{Lol@jM}XrKcb@bSkNjO{c@d`@_XpB_w@i@cZ_EqUTwJbMqWvW_v@lGeCpG?~RpHzKhWfTbOzDRvTw\\lFoUiCkD_C?_PvPqHeAeCkGr@ia@pCqEp[kP~KdBhI|OfA|OuDne@zJeAbZcQt@eFgAkCsYiW_Lum@vBuXbBeHdTuWtIeE~PhSlI|RpDrAzCyCtL_r@VkOmE{R{Km@yRah@IeGzE}AbUjCdJpEtDw@[kJgR}^{DuQQeMzC}TlGiJpCpAlEvM~Q~Db@qFyIad@lCae@~CkElGeCh]`@rEuInC}H`A_MgKmMcFiQKkUhCk^eGya@tBiZjAaHhIaJvWaFfMWpAuK]gSlFqC|GpAbAiDuDsF}PqHeA}E~@cD~IeKl[yIiCiIaSiUkFq\\w@sRRiFzB{ClZyKrAeIo@uGuAeD}DgAiOUcAyHbByDxQgHvLoUb\\iG~BgDvAeMiB{UeAioBaBqGwE_EqOqDqEgIpDiDrM\\`W`MhPzB~Do@rJwO~Kke@zCcNMaOwEiN~IwHhEd@hCkBbA}P{IiSuFdB{SpR{EKgGeFwBkEbAcOnGmQxJuFtl@d@zCiWpDqKpFkFpMqA~CsDhD}Mq@cNhByOtQwLtm@uw@bD}SoH{g@TkGtC}DnUe@jRtHrI~C`N_S_FcWaCoKpBkLn^_IjJdElF`FnBzIa@hGwHhIaXdCqC~BcBdJ|GpMjQwD~D}A|k@sn@zD}MmJiN}N_PgAoElEqQlE{DdMpBpB~Cf@`m@hBhEzD`@hs@gh@jFkHbD_P_BoHaN_OWeIbJ_@fLjDpDfa@bArC~C`@xMiDbNo_@iVeKeCqDn@wEvPeGdFqNbBcP`G}HfFdAv@p@|XkSzJxA~ZvJpGeIhKic@~Dyd@vIm@pDiJlJ{tAlUeD`EuP{AuNuBeAaKpCgG}LH{JpHuPxq@AfnDXzzCFrl@[JuN`_DcAdyAH|VDfm@EhxARnUJbpBO?t|FKnz@LfaGU~{DEfpF]`xLEfzBHb|BPtPIpjDChzFCbs@Rv{Bt@l~DbAlyDFlzDf@|`EXnwECxNLnKBnHIrYE|}AXxwJoA|_TAjkAgq@l@u\\@{sJpA}xAZSnf@?bHcm@c@ytKaEcyAc@UkcCkCisFZu}B]gxFj@}{DTg}@H{_BI}xCIalBJwnCqyAh@myA@{cEYoiACwyRyBaeGTfPeNnAkk@aCiN",
     levels: "PDFDFDHEDDFGFDFDEIEEHDFEHEFEFEHEFDAFGDHCECGFDHEIDDFEFDGECHDFEEHEDCGCJDEFEDIEHDEEGDGDHEGDHDJDEFEHDEHDFDIDGFEDHDDDHDDFDHFDEHDEHCEFBHEDFDEEHDFDGCFDEGDEDGEHDFCHCEFCGDEEHDEFFDIDGEDEIDFDGDI@FDFDDFHGDDGCEIEGGCFDDHDDGEGEEDLE@HFAEGICFDGEFDGFBHEHCFDIEDGEDIDHFDEHDGCFDHGEDGFDDHBEFCIDEFEFGFGFDFGDK@@BFFC?AA@BNAABA@?BAB??DA@CBA@A@E@BC@NB?@H?GA@LCEBC@AC?BLBC@ACIFDP",
     color: "#35b2c5",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#35b2c5",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon67);

var polygon68 = new GPolygon.fromEncoded({
  polylines: [
    {points: "m~inGh{m}PJkaBz@mqQYysNvSsHvFv]dGzClF_DjNyVpKmA~I|@l~@p[j[x@vb@tNpOlIvVpAzU`GnBzD{Cb]r@hOvCbJlTtVhOsN~i@kMrLGlQbFlFnIjEjU_Cdu@|DrGpMT}GgVa@oZfGiNpNmLvQvCyEdQSjIpBlQtFzLrE@dEaD`K_^rCiDtUkHlGvBxUxi@tYqBbOsY}CgEsKoFdAqO~V~VlHX~I_EbH}I~FoZrCeb@~M_ZxMiRf`@}VpDVdKrJnOpG`A|B^rFwJpMmAvGpClMvLdHrFk@dRcM`DYzJfDrBdEZjXdJlLrX`K|OkLdAGrFf@zU`Vzy@z_@n@zf@lOzY`VrOvE`GrArg@nIjUhHb]`DrJdMwFfCh@dSbW|JlFpPjFdTdCnLdFOhi@zIv_@bMpNtH`BjIq]~Cw@`DlGdDzRxC|CrLUxFvClLfa@lKpQbOdOtI`@vCgCBkKkJqXdAuLf_@ef@pLmGjMOdHvGwK`Sc@nLpOzKlXb\\lDRfDmCdBeM{B_LGuWnAiFjBMdH~CnHla@zDj@zz@_Zvq@fAbCr@lAvDcC|FmEv@mMwBwHtQ[fVdEhMt[jBv\\kBzCqDLgUdVoa@xIeDlDk@fG~VLrB~S`QZDrBc@pI}DLSvCuABm@iWiQOgItCgPzEkE|P{DbLR`MmElIuEuEz]uDfL^rDpKpJ`JbHlSc@h@_Lt@sBbAeRO_Bc@uNMy@xDu_@vX_KlUyFnHs@dG@tTpHzA|AlVdv@i@xV_Gx]j@dc@pMr{@nAvDrAnDdDx\\zCxBvXkC~GpCxGnKpAvNv@z]uA|KsGbL_JtG_[pC{DnOl@|FdEpGxL~WdDrPwGlw@qDlR_Stl@uFbCwKEyDdDlBd]eLbc@qCx@qAeB_Hu_@yFqB{HdJLtJbLjM~Abi@oCtS{CvFsE|A}Ci@eAaFtM}QQyI{B_BuHQ{MhGiOfWZ~ClHbAhBxDcEbv@]fAwX?yBxVqFlW{O`Om`@rm@?pK~JfUtAbJaM~l@yA~d@e@`o@cJxYcDzSE~r@uFzWaIxOmAtCaLti@zFhh@qHp`@mG~AiDbHgCti@qDdDsSqAuFqEsHaNqDm@cR~_@h@dFbDpCbEDpBkDhK\\zDbTcMloBaG|YwFrEyCgEaUIeDnOgOnMwChGiAd]hEzSs@jHqHpC_WqCmFvD_BhHBjFvDhFnSuArIp@lE|DUbHoaAtsA_Cti@{IzUuUdDaLhHg@dF~DhIfAhJyH`xAcBdEiFj@cN{LiDe@cOzLQpDlBjCrO`D|DfEiOz[uIhGeQrIkLxWiT|iBKzZpDJ~I|E^vMqFzMiCEqG{L{CeAmCj@}D|GcIn{@qHtPIzJfG|L`KqCtBdAzAtNaEtPmUdDmJztAqDhJwIl@_Exd@iKhc@qGdI_[wJ{JyA}XjSw@q@gFeAaG|HcBbPeFpNwPdGo@vEdCpDhVdKcNn_@yMhD_Da@cAsCqDga@gLkDcJ^VdI`N~N~AnHcD~OkFjHis@fh@{Da@iBiEg@am@qB_DeMqBmEzDmEpQfAnE|N~OlJhN{D|M}k@rn@_E|AkQvD}GqMbBeJpC_C`XeCvHiI`@iGoB{ImFaFkJeEo^~HqBjL`CnK~EbWaN~RsI_DkRuHoUd@uC|DUjGnHzg@cD|Sum@tw@uQvLiBxOp@bNiD|M_DrDqMpAqFjFqDpK{ChWul@e@yJtFoGlQcAbOvBjEfGdFzEJzSqRtFeBzIhScA|PiCjBiEe@_JvHvEhNL`O{CbN_Lje@sJvO_En@iP{BaWaMsM]qDhDpEfIpOpDvE~D`BpGdAhoBhBzUwAdM_CfDc\\hGwLnUyQfHcBxDbAxHhOT|DfAtAdDn@tGsAdImZxK{BzCShFv@rRjFp\\`ShUhChIm[xI_JdK_AbDdA|E|PpHtDrFcAhD}GqAmFpC\\fSqAtKgMVwW`FiI`JkA`HuBhZdGxa@iCj^JjUbFhQfKlMaA~LoC|HsEtIi]a@mGdC_DjEmC`e@xI`d@c@pF_R_EmEwMqCqAmGhJ{C|TPdMzDtQfR|^ZjJuDv@eJqEcUkC{E|AHdGxR`h@zKl@lEzRWjOuL~q@{CxCqDsAmI}R_QiSuIdEeTtWcBdHwBtX~Ktm@rYhWfAjCu@dFcZbQ{JdAtDoe@gA}OiI}O_LeBq[jPqCpEs@ha@dCjGpHdA~OwP~B?hCjDmFnUwTv\\{DSgTcO{KiW_SqHqG?mGdCwW~u@cMpWUvJ~DpUh@bZqB~v@e`@~WkOzc@cSjNsKbb@kM|XzLnl@nGnRdQjVAnXyAjCeNyA_DjD{AdTpChYg@vFmPvS_Lze@_FEiFqFgAi]{BmAcEh@iDhBl@exAZcXQqmBUmFJg|@?ccBFkdABeHXscIJaw@Pc_@Sk}A^o~G?{^Y}aBPeZeBs{HJa~@\\ugEc@}mDCu|BQa_ACksAIch@Yym@TkPEygHDkhMEgwBHkITkpAW_bBLs}@{@o{BPgA^iZVkdBw@uxD",
     levels: "P?CGMEGDEHDEECEDHDDFDHEFDIDFGEJEGDIGCFDHDECFHEGIFCFHFDHEDEGEDJDCGDDEHFDFDGDEGFEAGEHFECGECBHDFDFDDHEHDGDHCFDDFEDJDFDEGDIEFEGDIDEFDDHCEEHFCIDFDFGEIDHDFEBHBFDAH@ACGFDHDDEBICDGAFICBD@@DHCDBJCFGDEFC@DHDFDMCDGDFFHDBDGCHFDDGEHDEGEGEFEHEDGEEDGDHFDDFBGGCFDHDDGECECEFDADFFIDFEHFCDGHDFDDFHDIEEGEHDEDGEEHCEFCFDHGEGDHDCFDHEDFHDEDGECEHGFCFGFDDFDGDDGFDFGFGFEFDJFCFEBHDDFGDEGHDFCGDHEDFHDIDEGDEIDFCHEIBFHDFEFDHCFIEAGG@FEHDEGEGDDFDDFCHEKEDGDFDGEHDDFDF@EHDEEDIEDEGDIDFFEDHEEDGCFECHCFDHEGDEDGEDFCGDFDHEEDFDEHBFECHEDHEDFHDFDDHDDDHDEFGDIDFDHDHCFGEDIDHFDHEIDEHEEDGEIDEFEDICGCDEHEEFDHCEFHEDGDDFEODFFDCGACBC@A?@B@BB?EBBC?CA@AB@DB@@B@DBBDACCP",
     color: "#977b48",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#977b48",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon68);

var polygon69 = new GPolygon.fromEncoded({
  polylines: [
    {points: "gsinGnucsPPsrAMo@[mc@jAsoNN}fATscAVezAFmBImg@Lu`@@gl@d@ehEf]g\\zWi]p^efAvJ_d@l\\uzBn_@{{CtG{o@xNanC~Na}ArHiTf[ic@dLiYnNmtAjOq~@zW_u@hDsf@UmaAvGe_@lGkQrj@kl@jb@{q@~m@utB|HabA~CaNtI{SlLuOvRse@xO{h@dCuSLw`@jDyUlIc\\hVuh@|OmXbg@}h@dYcSzo@wr@ja@ypA`KoO|bAoj@r[eNzh@sOfEFnLzCxk@th@xWfRfMlDvQgA~WaNfG_Kn]syAvZik@nNmMpIqCfn@zE`OuCpi@}i@xJeG~M}Cr`@lDheAr^fXu@b]eQx{@oz@tUwP|SuExi@{@lLsDxGmPdO{p@hUmd@QlbCLrbDNfuAa@`_GEbmLRtdB@~rEhk@DtbJi@teAnAbbAUDz{CCz{Ae@lqNB|xBS`i@@~h@]bgFD|uH_{AT_oADmKXusDXyqD`@Qr{B^~o@JraAUz}BPhsCe@laCx@pdBNnz@IzyANdf@GpHJtu@EbNHtCcB|~Cr@~c@?d}@j@dwB{A|k@coDMkz@W{rEl@{XM{FDc@EqNbAcm@BkeCs@aY]yaHKazAYf@uuEDs}@I{wM}pIa@}X?k|C_@gUdA?wC",
     levels: "PCACB??AAA@@JDGDHDFDDGDDGDFFDEHEEHFDFDEDFDECLCFDDGDIEDICECFEIEFFDIEEGEDHEFIEDGDDHDENB@BBBAKACCK@AABA@BL@BA@KBACBCCACAAA@ADDCADMADB@@CCDBCBK?CK?ADEP",
     color: "#f943cb",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#f943cb",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon69);

var polygon70 = new GPolygon.fromEncoded({
  polylines: [
    {points: "uyamGrxv~PtIiGhO{[}DgEsOaDmBkCPqDbO{LhDd@bNzLhFk@bBeExHaxAgAiJ_EiIf@eF`LiHtUeDzI{U~Bui@naAusATcHmE}DsIq@oStAwDiFCkF~AiHlFwD~VpCpHqCr@kHiE{ShAe]vCiGfOoMdDoO`UHxCfEvFsE`G}YbMmoB{DcTiK]qBjDcEEcDqCi@eFbR_`@pDl@rH`NtFpErSpApDeDfCui@hDcHlG_BpHq`@{Fih@`Lui@lAuC`IyOtF{WD_s@bD{SbJyYd@ao@xA_e@`M_m@uAcJ_KgU?qKl`@sm@zOaOpFmWxByVvX?\\gAbEcv@iByDmHcA[_DhOgWzMiGtHPzB~APxIuM|QdA`F|Ch@rE}AzCwFnCuS_Bci@cLkMMuJzHeJxFpB~Gt_@pAdBpCy@dLcc@mBe]xDeDvKDtFcC~Rul@pDmRvGmw@eDsPyL_XeEqGm@}FzDoO~ZqC~IuGrGcLtA}Kw@{]qAwNyGoK_HqCwXjC{CyBeDy\\sAoDoAwDqMs{@k@ec@~Fy]h@yVmVev@{A}AuTqHeGAoHr@mUxFwX~JyDt_@Lx@b@tNN~AcAdRu@rBi@~KmSb@aJcHqKqJ_@sDtDgLtE{]mItEaMlEcLS}PzD{EjEuCfPNfIhWhQCl@wCtAMRqI|DsBb@[E_TaQMsBgG_WmDj@yIdDeVna@MfU{CpDw\\jBu[kBeEiMZgVvHuQlMvBlEw@bC}FmAwDcCs@wq@gA{z@~Y{Dk@oHma@eH_D_Aw}@OotDCkB~@orA?gWe@g`@B}Au@qpBEsBE_g@p@u~CVm~@@w^JsAFk@WqbAv@sjAQa}Pzk@?xbI`@jiBQnjCMdNHt`@]l[f@v_@LnyAF~cB?noA\\lhJRv~Oq@dyAL|tDSpnGw@Fd{EHlzAIhcAB`CCxVClhAa@hfCE`hCMxzBPhwDNdfKBjMAlWKhJPj{BFtiCDxiJG`jD^nkDJt{DKxyEHj|BO`|BCj}ABr{CR~vJquDG{{Ol@}bFO?Bwl@F}wACu@F{q@Ksk@Hof@Kel@p@MFguDg@}k@_@ok@G_@DmwAI_@PcpBNoUKixASgm@D}VEeyAIa_DbAKtNsl@Z{zCGgnDYyq@@bIo{@|D}GlCk@zCdApGzLhCDpF{M_@wM_J}EqDKJ{ZhT}iBjLyWdQsI",
     levels: "PDGDEDHFDFDGECDHDGEGHDFCFECHEEGDEDHEGEEHDHFDDFDHGDCFHEFDIFFDADFECECEGDDHDFCGGBFDDFHDGDEEGDEHEFEHEGEDHEGDDGCHGDBDHFEFDLCEGDDGD@CFEDGCJDFCDHD@@DBCHFAGDCIBEDDHDFGCA@HADFBFBHEDIDHEGFDFDHCFHEEKC@DACB@?AD?@B?CBDM?C?ABCAC@BADBBAO@C?@?AA@C@?A@A@BABACAA?B?NBBA@A@AA@C@DAAC@BBC@AA?FFFB@@KGDFDDFGFCFGGEP",
     color: "#5b0c4e",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#5b0c4e",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon70);

var polygon71 = new GPolygon.fromEncoded({
  polylines: [
    {points: "oiwlG`yljQViyCRqz@BicAb@aaBHocD`@ovFdAerIzvAo@noGRduD|@xnGj@bzADbtDXldMy@tyAAzvBFZGfoBChrH|A|AtmLI`y@AnULxbDFhjEFfiAAhr@Hx`BMh[WjbHa@v|AaA|vNC~MD`P?fMGjECdQIxKCxMArYOtFNpNa@pcEIz`AkjDLwHEMWmwL`@qIMiaBW_CX_cAPyLWwmAJovAi@qKKifBdA{cAQ_KY{}]qA_AujOMk^Cc_BQslC@yQU}zA?chDEcbF",
     levels: "P@@AB@BLCDB@@DB@A@DNC?A??@@EABA?A?B??A?ABB?NBBBCACBCBB@DDBCMAA?@AC?P",
     color: "#bcd4d1",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#bcd4d1",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon71);

var polygon72 = new GPolygon.fromEncoded({
  polylines: [
    {points: "}dwlG~|suPL_nDdAogD^e|@r@{kBPowB^}{DV_|BB_d@H_Z`rBO~MRvpCo@ns@WppA?rk@M`{AGzi@Mlp@@hy@M~COjv@LbeB@nyARhdAIzTBfl@?`h@Dn|AExzAy@ni@@nl@RtaACdcAOzz@fAl]Z~hBLvsLOCxp@HtULtzBk@`pH?~|B@~lBArM@jaAGl|BAznHd@bdIDxyIK|CFhkAFjfHicACsA@yTk@ik@_@sm@B{wAEwm@KiyAJswASyfJ~@ifFNsyAa@ezAPouEIw}@Hwc@CeADsp@LgpCMqwDCo_@LsoDl@GauC{@_cCB_~BG_DJahAzA}JqAwFQ}uGRepN",
     levels: "PC@?C?@?@LBB?BA@@ABAD@@BA??ACD@B@C@CDMA@BB???@@CBAA@N?CBC@AAADACBA@@A@B@C@MBCAADDDBP",
     color: "#1e9d54",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#1e9d54",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon72);

var polygon73 = new GPolygon.fromEncoded({
  polylines: [
    {points: "ocwlGrd_iQC{p@\\i|A?ebAI}uA?}e@X_nMQkWNuoGFm}Bb@oaAa@uxDTizCAoBx@yaDEwx@LidAzCorJuBgzHFueAa@aoPMufA]ys@C}~@zsDt@dkJiA~yAPrvE_@nxBLzW?hyAVb_Pb@fiAPvT_@pVXzcEHvhC\\|l@Q|SQlVBC||@IjpR?h}BLv~@{AdzJPrKZjgDUzcAGrwJf@hw@Mjw@_@npDW`tAWbwFCdLPd^IbHaBdyJBfx@@v`FGbf@u@rfLCdlAirH}AgoBB[F{vBGuyA@mdMx@ctDYczAEynGk@euD}@ooGS{vAn@Dmb@p@agCU_p@c@gcACgg@",
     levels: "PAB@?ABACBCE?BBACEDABAAMCBBC?AAACBBAC@AN?AADDACBCD?@B?BC@C?B@@MD@A@BD@@BDCK@C?AP",
     color: "#8065d7",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#8065d7",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon73);

var polygon74 = new GPolygon.fromEncoded({
  polylines: [
    {points: "acwlG~~~vPKa~AroDm@n_@MpwDBfpCLrp@MdAEvc@Bv}@InuEHdzAQryA`@hfFOxfJ_ArwARhyAKvm@JzwADrm@Chk@^xTj@rAAhcABGlWB~_FH|rEBnwF\\tvP@huDIri@P|SM|sBBfeACbh@DbrHHxzABfhBgoHDwnF[shFOkw@MgdA@wl@C?k@cZP}b@PyhAqAcy@VseQxAal@Uwg@AujJ^NyjEGw~DJqJ@s}AGwk@BkoCCgsADieBM_`ARcSk@s|OIeWEs{FCoyJ",
     levels: "PI@C@B@A@@ABCADAAA@CBC?M@A@@AABA@?A@?NB@@A?DC?CEACABMAAABA@?ABC@B?P",
     color: "#e22e5a",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#e22e5a",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon74);

var polygon75 = new GPolygon.fromEncoded({
  polylines: [
    {points: "{awlGnnbyPtjJ_@vg@@`l@TreQyAby@WxhApA|b@QbZQ?j@vl@BfdAAjw@LrhFNvnFZfoHEFxLGdlMV`cD@pyBGruEGj_HMvmF@~MRhBB~j@HtqTqnGv@}tDReyAMw~Op@mhJSooA]_dB?oyAGw_@Mm[g@u`@\\eNIojCLkiBPk`BIi@a`CGs{KOaa@FcR\\u{CMi\\N}bAEan@^i_AHwyCQgXGezAC}qGG{I[qMb@}Ei@whDM_wDCyAMcjJ",
     levels: "PBACAEC?CD?A@@BMAAAB?@BBABNABBDAB@CADBA?AMBAD?BAAABCABC@BCB?@P",
     color: "#43f6dd",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#43f6dd",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon75);

var polygon76 = new GPolygon.fromEncoded({
  polylines: [
    {points: "q`wlGbcoeQHkbDx@yaEUmx@Vi|BPwsDTo}BVs_EC}CDwsDFueAb@gu@o@eaFQaaBd@uyD@_rBF_Np@{|@?cHRof@|xA[zsJqAt\\Afq@m@@kkAnA}_TYywJD}}AHsYCoHMoKByNYowEhyA{AznGY|sD@piMYdhASpIWl]bAd`E]rfC^nyALvxACz@~{BXh_ADxuFAvyEGjcAIrYKdoB?rQq@?Sx}DBt`EEx]Lly@K|pBU|`@^teBHzICnV\\lvBXdxF?r{@M~WBjSC`y@_@xNLrKK~YB~^[vvDErbCD~[Bd|CTvzC@l|@i@vZz@xnPFhlCGx~@mVC}SP}l@PwhC]{cEIqVYwT^giAQc_Pc@iyAW{W?oxBMsvE^_zAQekJhA{sDu@Iw`ABeyA",
     levels: "PBBB@@@B@@BD?DAC@A?K@?BK@DB@B@A@MDAACBDDC@AO?CDA?@?CBB@ABAD@B@ADA@@BBAA@@C@@@CDAAMA@CABBCAAA?CBBCJ@P",
     color: "#a5bf60",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#a5bf60",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon76);

var polygon77 = new GPolygon.fromEncoded({
  polylines: [
    {points: "i}vlG`brtPPabCHyXHko@b@aaCl@}}@YcFv@{Ks@yx@pBalAHk}BE{FAug@zA}k@k@ewB?e}@s@_d@bB}~CIuCDcNKuu@FqHOef@H{yAOoz@y@qdBd@maCQisCT{}BKsaA_@_p@Ps{BxqDa@tsDYlKY~nAE~zAUE}uH\\cgFA_i@Rai@C}xBd@mqNB{{AE{{Cp|OcEnaFjAhTt@~TYngC?tGe@rGUn@KtYp@h@DzuAqA~}FtBvgBF`vDV@z~BM~uDB`mGBnh@A|g@J`k@GxDGdLAhRFx}@wAnfF_@nvEu@jmFLpaACjoC_@fdB_@jvLEb_AxwAh@GvyFb@~xC?t`BWd}BK~KNhnBhArlVyp@Pui@|AIuUByp@wsLN_iBMm][{z@gAecANuaABol@Soi@AyzAx@o|ADah@Egl@?{TCidAHoyASceBAkv@M_DNiy@Lmp@A{i@La{AFsk@LqpA?os@VwpCn@_NSarBNO_m@B}W",
     levels: "PA??BBCCDDA@CEACDDA@AAACACCBCABK@AB@KB@ABAA@MECDBC@@C?CEC?O@A??AD@A?BBADABB?HIBCAAC@MCH@IDC@C@B@DCA??AB@@DABA@@AB?BBIAP",
     color: "#0787e3",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#0787e3",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon77);

var polygon78 = new GPolygon.fromEncoded({
  polylines: [
    {points: "cnvlGnmupPDcmL`@a_GOguAMsbDPmbCxq@gtAp[wkAdKuSfwAciA`^wx@x]gfAni@siCdX}c@zh@ciArKa^vJ{bC~Nyw@hHkNhs@ct@fQ_Fnh@uGzb@V~FmCh`@ekAnCcXoBsa@hEkYf`AwyA~J{IxXkJ|h@qWnPwNhPu\\h[iZfGwRLgG_E{PlAcNfQu\\n[ea@rIuXtNqs@fMq]fKuR|UuVnu@ad@lUua@|Wcz@zAeOBai@|HgxAhR{iA|CyqA?cz@hNmjBhL_^~Y{k@lZgwATyMaHs}@vA_^bPke@~\\ghBrHwRrRi]jQqOr`@wRdTmEnNuHrx@wgAvNcK|b@wRrFsGf[icAh_@cy@d}@oaAri@ct@bO}J~r@iHhy@kc@dCgCrKs^bOsWxJeHbm@sWl^eYlYo}@z]cn@xh@c`@xd@eMhs@wKdp@q{@nQqNtG_LdNyb@lb@}i@?vbNT~sAPnlDMpxD@xoJ_@zuBPdmPHjzDMd~J`@ly@[zwBXdiEcAdnGt@`pG]~\\TrFQtWPzb@F`nMg@tp@KlyFLzu@Ute@Zx_PavDWwgBG_~FuB{uApAi@EuYq@o@JsGTuGd@ogC?_UXiTu@oaFkAu_RxEueAoAubJh@ik@EA_sESudB",
     levels: "PBB@BKEDGFHEGDEGFDIGDEDIFEEHGDDFEDHEDDGDFCDHDFFJDGDFEDEGDFGDEGEKCGEDDFFDDHEGDHEFHCDGCEGEGFDHDFDEOBACABC?BBCBCCCBBBACCABCN?CEC?C@@CBDCEDDAKAP",
     color: "#695066",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#695066",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon78);

var polygon79 = new GPolygon.fromEncoded({
  polylines: [
    {points: "m~elGfkv_Q?sMRurDMgaGJoz@?u|F^QlwAH^Enk@F|k@^fuDf@LGdl@q@nf@Jrk@Izq@Jt@G|wABvl@G?C|bFNz{Om@puDF@|qFC~xFY`aGUnmWK~]En}BJf_JAtv@FdzDExtIFh]A~vJHv]wxABoyAMsfC_@e`E\\m]cAqIVehARqiMX}sDA{nGXiyAzAg@}`EGmzDcAmyDu@m~DSw{BBcs@BizFHqjDQuPIc|BDgzB\\axLF}jF",
     levels: "P?AAABL@@BBD@C@AA@A@ABBM?BAAAC??A@@ANA@CDDBCAADMAC@AE??BAB?@P",
     color: "#cb18e9",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#cb18e9",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon79);

var polygon80 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_ksjG|oukQH{`A`@qcEOqNNuF@sYByMHyKBeQFkE?gMEaPB_N`A}vN`@w|AVkbHLi[Iy`B@ir@GgiAGijEMybD@oUHay@}AumLBelAh~A^j{Ad@tiJCbl@X~l@nAnsD[bzAJfyARpzHl@pzHRz@jAP?d~@q@nZq@ptDW~`@PtJEdIWbGd@liB_@~I?lyAW_@rl[Bv@Ox}@ChaWNtuBOl|Rm|O|@cFD_xBE_NDsuKBmzAEg{RQqtAg@_uGb@",
     levels: "P?BBA?A??B?A?ABAE@@??A?CBM?CDBDC?@BDAEBDBBACB??N@ABAAM@C@@A?CCP",
     color: "#2ce16c",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#2ce16c",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon80);

var polygon81 = new GPolygon.fromEncoded({
  polylines: [
    {points: "chsjGxdgiQt@sfLFcf@Aw`FCgx@`BeyJHcHQe^BeLVcwFVatA^opDLkw@g@iw@FswJT{cA[kgDQsKzAezJMw~@?i}BHkpRBmiAFir@ziJZ?}@vsD_@hyAtChtDVzyA?zyAF~RT~dAMz_FrDhn@Rfk@Vt`BPfaCJl_Gz@zgBy@lyAP~tAI?t@N?l@f~BJ|gADLjAxmDElhk@MdqN?fxFi@tmd@myAV_J?miB^cGe@eIVuJD_a@QqtDVoZp@e~@p@Q?{@kAqzHSqzHm@gyASczAKosDZ_m@oAcl@YuiJBk{Ae@i~A_@",
     levels: "P@B?C@CB?B@?DCBCADDABA?MDCED@@BBDB?E@ADCAOBAAB@EB@@M??BCABBDBEADB@?CDBDC?P",
     color: "#8ea9ef",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#8ea9ef",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon81);

var polygon82 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_esjGtf{uP@{nHFm|BAkaA@sMA_mB?_}Bj@apHMuzBti@}Axp@QiAslVOinBJ_LVe}B?u`Bc@_yCFwyFpbIAdg@Sr_BJvsAKdyAVlyA^jgCb@h_@?vq@Zft@DjrEDdy@Id|Am@ltD?jqIKhaA[bvBMxQSNf`BFbiPr@dwQG`bSfB|mFBvrNK~zYDlfB?nzCqbIRcXHaNAKF{k@OggCUmWTw`AL}fCEcx@Du_@AywKa@}yAD{yA?kzAPwTHceACgwOf@cHJFmWGkfHGikAJ}CEyyIe@cdI",
     levels: "P@@???BBICH@CAACBMAAAD??AAC?DAC?CAANAABDD@@?NA@AC@CAC@?AA?C@AAAL@@AABP",
     color: "#f07272",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#f07272",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon82);

var polygon83 = new GPolygon.fromEncoded({
  polylines: [
    {points: "scsjGtzcwPC_bFbHKfwOg@beABvTIjzAQzyA?|yAExwK`@t_@@bx@E|fCDv`AMlWUfgCTzk@NJG`N@bXIpbIS@fab@h@hkGYfzW@pqLLnYOnx@Lbf@Gbx@ChxEIjdDEnqPshC_@{iFM_pA?ayABc_PEc_PFagJOgkCYci@YkCvAJquFFk_HFsuEAqyBWacDFelMGyLCghBIyzAEcrHBch@CgeAL}sBQ}SHsi@AiuD]uvPCowFI}pE",
     levels: "PJAAA@C?AA?@CAC@CA@AMCCBAAAA@@AOAC??@ACADM@?@CBB@?AA?@BBAA@@P",
     color: "#523af5",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#523af5",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon83);

var polygon84 = new GPolygon.fromEncoded({
  polylines: [
    {points: "wasjGxxzrPFacB^gdBBkoCMqaAt@kmF^ovEvAofFGy}@@iRFeLFyDKak@@}g@Coh@CamGL_vDA{~B[y_PTue@M{u@JmyFf@up@GanMQ{b@PuWUsF\\_]u@apGbAenGOmgC|vAPztIOxLKnMJrsAQ`tDEzbAXdKOrvFdAbJDtSCpNIpsBSlbAVpyF_@dgBT|eKAvoBSvHM~KU^pq@e@ftFQ~HPf_DL|LGpmBXdzULfq@_@~kXQptCBrsMd@n{BJnjNDjICjpPEdxB@lnB[|Od@tyFyQRcvBLiaAZkqIJmtD?e|Al@ey@HkrEEgt@Ewq@[i_@?kgCc@myA_@eyAWwsAJs_BKeg@RqbI@ywAi@\\mrK",
     levels: "PABACABB?A@EA??A@ACBACCABBBCCCMBAA@ADBA?D@@BBBBCB?OCBCABAACABCB@C@?BCNAAC?CAE?CAA??CAAACKP",
     color: "#b40378",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#b40378",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon84);

var polygon85 = new GPolygon.fromEncoded({
  polylines: [
    {points: "_bsjGnva|PBid@DahC`@ifCBmhAByVCaCHicAImzAGe{EIuqTC_k@SiB?eFjCwAbi@XfkCX`gJNb_PGb_PD`yAC~oA?ziFLrhC^C|{HDjpQBlHOnda@kCjzV?x}ABhJIn|Y{zOa@m}OPywF^kkETwTBybA{BqIDi_JDovDy@IurBJyyEKu{D_@okDFajDEyiJGuiCQk{BJiJ@mWCkMOefKQiwDHouA",
     levels: "P?AA?@?C@ABBAMDACA@??CAN@@ADD?@NCB??ED@CMABABAA@A@A?@AP",
     color: "#15cbfb",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#15cbfb",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon85);

var polygon86 = new GPolygon.fromEncoded({
  polylines: [
    {points: "s`sjG~jpcQ_@ueBT}`@J}pBMmy@Dy]Cu`ERy}Dp@??sQJeoBHsYFkcA@wyEEyuFYi_A{@_|BIw]t|OJ~mGQfnBH~~CFb~OZ`_Pe@?jTLpMChmAJ`zAHdiDGr|BD`{BGf{BCr|BeAtzBTjtFSzCf@tyJQno@|@zhEaAflAUvBThmAUtvE}@|yD|C~c@Kf@ZzgWNtmAMr`HIRw@z|B_uAHmyAQ{gBx@m_G{@gaCKu`BQgk@Win@S{_FsD_eAL_SU{yAG{yA?itDWiyAuCwsD^?|@{iJ[GilC{@ynPh@wZAm|@UwzCCe|CE_\\DsbCZwvDC__@J_ZMsK^yNBay@CkSL_X?s{@YexF]mvBBoVI{I",
     levels: "PBABA@CCC?@?ADC??MBB?@CNAAA@A@C?CCBDBCDBDBCDEAADCANACDA@E?BDBB@@DECDM@DC@@@C@@AABB@@ACAA@P",
     color: "#77947e",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#77947e",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon86);

var polygon87 = new GPolygon.fromEncoded({
  polylines: [
    {points: "}`sjGnjn`QTomWXaaGB_yFA{yFSaoJCs{CBk}ANweCnvDx@h_JEpIExbAzBvTCjkEUxwF_@l}OQzzO`@G|iXQ`qAWneIIhYx@`qCEbtPFd]i@`yHMxqm@a_Pd@c~O[__DGgnBI_nGPu|OK@_wJGi]DytIGezD@uv@Kg_JDo}BJ_^",
     levels: "PAAB@?B?MC@DE??BCNBAACCACCNC@?BBM@@A??BAP",
     color: "#d95d01",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#d95d01",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon87);

var polygon88 = new GPolygon.fromEncoded({
  polylines: [
    {points: "mzrjGruulPU_tA?wbN`ZqLd^uYnoAgKjf@{O~\\gE~z@w[vVwQfr@oKjlBkqBbIc@`oDvfAzeAiB`VlEbg@rPpW~Nta@r_@vX~JpwAcC`vB|]j}@dBbhAmHnJcErWub@fHoFzc@cHfUzCxbA~_@`jAx@p`@yUvVsTxOaTnRk`@faAkuAnYy[lKeJtIgD|e@kAdbAhGbRbIli@xe@tY`O|HvB|Tv@f`@uD`m@kg@`w@sVxMgQbVim@rT_ZfK{DhZfBdn@a@LhtDeBd}A`@b_TWfMzAj`@oAh~BxA|tG]|XKt_BFzUQjaDXfjGHhm@Ch|@?duJCnZYdL@bTId]p@|t@Fp@[~_@VrgAOxj@B|lAMtyDS`xD_LTwHLwoBR}eK@egBUqyF^mbAWqsBRqNHuSBcJEsvFeAeKN{bAYatDDssAPoMKyLJ{tIN}vAQIw`AZ{wBa@my@Le~JIkzDQemP^{uBAyoJLqxDQolD",
     levels: "PBKEGEDFEFHLEGEGEDEIFFHGEDFHEFJDFDDFDCIEGDEGDEIFGDDHEDNDDBDDCDB@@C?B@CBA@C@CBBAA?N?BCBBBB@@D?ABDA@AABMABBB?BBABP",
     color: "#3b2584",
     opacity: 0.7,
     weight: 3,
     numLevels: 18,
     zoomFactor: 2}],
  fill: true,
  color: "#3b2584",
  opacity: 0.4,
  outline: true
});
map.addOverlay(polygon88);

