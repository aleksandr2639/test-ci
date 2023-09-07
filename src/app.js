export default function heroHealth(hero) {
  let result;

  if (hero.health > 50) {
    result = 'healthy';
  }

  if (hero.health <= 50 && hero.health > 15) {
    result = 'wounded';
  }

  if (hero.health <= 15) {
    result = 'critical';
  }

  if (typeof hero.health !== 'number' || hero.health < 0) {
    throw new Error('Value "health" is not number');
  }

  return result;
}
