import { $themeBreakpoints } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    shallShowOverlay: false,
    // webService: 'https://servicioweb2per.azzorti.co/hmvc/index.php',
    // webTemporal: 'https://servicioweb2per.azzorti.co/temporales/',
    webService: 'https://servicioweb.dupree.pe/hmvc/index.php',
    webTemporal: 'https://servicioweb.dupree.pe/temporales/',
    timeout: 300, // Segundos
    dataUsuario: {
      nombre: '',
      documento: '',
      codigo: '',
      rol: '',
    },
    localizationobj: {
      percentsymbol: '%',
      currencysymbol: 'S/. ',
      currencysymbolposition: 'before',
      decimalseparator: '.',
      thousandsseparator: '',
      pagergotopagestring: 'Ir a pag =',
      pagershowrowsstring: 'Mostrar filar =',
      pagerrangestring: ' de ',
      pagerpreviousbuttonstring: 'Previo',
      pagernextbuttonstring: 'Siguiente',
      groupsheaderstring: 'Arrastre una columna para agrupar',
      sortascendingstring: 'Ordernar asc',
      sortdescendingstring: 'Ordenar des',
      sortremovestring: 'Quitar orden',
      groupbystring: 'Agrupar por esta columna',
      groupremovestring: 'Quitar de grupos',
      filterclearstring: 'Limpiar',
      filterstring: 'Filtro',
      filtershowrowstring: 'Mostrar fila donde =',
      filtershowrowdatestring: 'Mostrar file donde fecha =',
      filterorconditionstring: 'o',
      filterandconditionstring: 'y',
      filterselectallstring: '(Seleccionar todo)',
      filterchoosestring: 'Por favor seleccione:',
      filterstringcomparisonoperators: [
        'Vacio',
        'No vacio',
        'Contenga',
        'Contenga(coincidir mayusculas/minisculas)',
        'No contenga',
        'No contenga (coincidir mayusculas/minisculas)',
        'Inicia con', 'Inicia con(coincidir mayusculas/minisculas)',
        'Termina con',
        'Termina con (coincidir mayusculas/minisculas)',
        'Igual',
        'Igual(coincidir mayusculas/minisculas)',
        'Nulo',
        'No nulo'],
      filternumericcomparisonoperators: ['=', '!=', '<', '<=', '>', '>=', 'Nulo', 'No nulo'],
      filterdatecomparisonoperators: ['=', '!=', '<', '<=', '>', '>=', 'Nulo', 'No nulo'],
      filterbooleancomparisonoperators: ['=', '!='],
      validationstring: 'Valor no valido',
      emptydatastring: 'No hay registros que mostrar',
      filterselectstring: 'Seleccione un filtro',
      loadtext: 'Cargando…',
      clearstring: 'Limpiar',
      todaystring: 'Hoy',
      browsebutton: 'Buscar',
      uploadbutton: 'Cargar',
      cancelbutton: 'Cancelar',
      uploadfiletooltip: 'Cargar',
      cancelfiletooltip: 'Cancelar',
    },
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
  },
  actions: {},
}
