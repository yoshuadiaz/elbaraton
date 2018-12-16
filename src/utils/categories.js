export function getSublevels(category, levels = []) {
  if (category.hasOwnProperty('sublevels')) {
    category.sublevels.map((cat) => levels.push({
      'id': cat.id,
      'name': cat.name
    }))
    category.sublevels.map((cat) => getSublevels(cat, levels))
  }

  return levels
}