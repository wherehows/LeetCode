var canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length).fill(0);

  const queue = [[0]];

  while (queue.length) {
    const nextRooms = queue.shift();

    for (const room of nextRooms) {
      if (!visited[room]) {
        queue.push(rooms[room]);
        visited[room] = 1;
      }
    }
  }

  return !visited.includes(0);
};