import './styles.css'

import {
  obtenerHeroesArr,
  obtenerHeroeAwait,
  heroeCiclo,
  heroeIfAwait,
} from './js/await'

// obtenerHeroesArr().then(console.table)
// obtenerHeroeAwait('iron').then(console.table)
heroeCiclo().then(console.log)
heroeIfAwait('Ironman')
