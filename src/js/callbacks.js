const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir',
  },

  iron: {
    nombre: 'Iroman',
    poder: 'Absurda cantidad de dinero',
  },

  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reacción alérgica a la picadura de una araña',
  },
}

//callback retorna un heroe

export const buscarHeroe = (heroeId, callback) => {
  const heroe = heroes[heroeId]

  if (heroe) {
    callback(null, heroe)
  } else {
    callback(`No existe ub héroe con el id ${heroeId}`)
  }
}
