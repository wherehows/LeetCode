var canVisitAllRooms = function (rooms) {
  const queue = [[0]];

  while (queue.length) {
    const nextRooms = queue.shift();

    for (const room of nextRooms) {
      if (rooms[room]) {
        queue.push(rooms[room]);
        rooms[room] = 0;
      }
    }
  }

  return !rooms.some((val) => Array.isArray(val));
};