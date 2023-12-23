class Solution {
    public void transpose(int[][] arr){
        for(int i = 0; i < arr.length; i++){
            for(int j = i + 1; j < arr[0].length; j++){
                int temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
            }
        }
    }

    public void rotate(int[][] matrix) {
        transpose(matrix);

        int ci = 0;
        int ce = matrix[0].length - 1;

        while(ci < ce){
            for(int i = 0; i < matrix.length; i++){
                int temp = matrix[i][ce];
                matrix[i][ce] = matrix[i][ci];
                matrix[i][ci] = temp;
            }
            ci++;
            ce--;
        }    
    }
}