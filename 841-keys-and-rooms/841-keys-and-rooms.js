/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = rooms.length;
  const queue = [[0]];

  while (queue.length) {
    const nextRooms = queue.shift();

    for (const room of nextRooms) {
      if (rooms[room]) {
        queue.push(rooms[room]);
        rooms[room] = 0;
        visited--;
      }
    }
  }

  return !visited;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [0], [2]]));
