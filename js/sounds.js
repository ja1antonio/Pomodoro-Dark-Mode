export function sounds() {
  const soundForest = new Audio(
    'https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Floresta.wav?raw=true'
  );
  const soundRain = new Audio(
    'https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Chuva.wav?raw=true'
  );
  const soundCoffeshop = new Audio(
    'https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Cafeteria.wav?raw=true'
  );
  const soundFirePlace = new Audio(
    'https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Lareira.wav?raw=true'
  );

  soundCoffeshop.loop;
  soundFirePlace.loop;
  soundRain.loop;
  soundForest.loop;

  return {
    soundCoffeshop,
    soundFirePlace,
    soundForest,
    soundRain,
  };
}
