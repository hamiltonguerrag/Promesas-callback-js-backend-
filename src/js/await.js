import { buscarHeroe, buscarHeroeAsincrona } from './promesas'

const heroesIds = ['capi', 'iron', 'spider']
const heroesPromesas = heroesIds.map(buscarHeroe)

export const obtenerHeroesArr = async () =>
  Promise.all(heroesIds.map(buscarHeroeAsincrona))

export const obtenerHeroeAwait = async (id = 'capi') => {
  try {
    return await buscarHeroeAsincrona(id)
  } catch (error) {
    console.error('CATCH!!!')
    return {
      nombre: 'Sin nombre',
      poder: 'Humano corriente',
    }
  }
}

export const heroeCiclo = async () => {
  console.time('HeroesCiclo')
  // const heroes = await Promise.all(heroesPromesas)
  // heroes.forEach(console.log)

  for await (const heroe of heroesPromesas) {
    console.log(heroe)
  }
  console.timeEnd('HeroesCiclo')
}

export const heroeIfAwait = async (id) => {
  if ((await buscarHeroeAsincrona(id)).nombre === 'Ironman') {
    console.log('Es el mejor de todos')
  } else {
    console.log('En tus sueños')
  }
}

