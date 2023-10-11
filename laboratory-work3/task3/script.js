const N = 7;
const M = 5;
const matrix = [];

for (let i = 0; i < N; i++) {
  matrix[i] = [];
  for (let j = 0; j < M; j++) {
    matrix[i][j] = Math.floor(Math.random() * 21) - 10;
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposedMatrix = [];

  for (let i = 0; i < cols; i++) {
    transposedMatrix[i] = [];
    for (let j = 0; j < rows; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
}

const transposed = transposeMatrix(matrix);
console.log('Транспонована матриця:');
console.log(transposed);
