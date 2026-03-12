export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) : number[]{

    let n = collection_1.length;
    let m = collection_2.length;
    let k = collection_3.length - 1;
    let i = 0, j = 0;
    let sorted : number[] = [];

    while (i < n && j < m && k >= 0){
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]){
            sorted.push(collection_1[i]);
            i++;
        }
        else if (collection_2[j] <= collection_3[k]){
            sorted.push(collection_2[j]);
            j++;
        }
        else{
            sorted.push(collection_3[k]);
            k--;
        }
    }

    if (i == n){
        while(j < m && k >= 0){
            if(collection_2[j] <= collection_3[k]){
                sorted.push(collection_2[j]);
                j++;
            }
            else{
                sorted.push(collection_3[k]);
                k--;
            }
        }

    }

    if (j == m){
        while(i < n && k >= 0){
            if(collection_1[i] <= collection_3[k]){
                sorted.push(collection_1[i]);
                i++;
            }
            else{
                sorted.push(collection_3[k]);
                k--;
            }
        }
    }

    if (k < 0){
        while(i < n && j < m){
            if(collection_1[i] <= collection_2[j]){
                sorted.push(collection_1[i]);
                i++;
            }
            else{
                sorted.push(collection_2[j]);
                j++;
            }
        }
    }

    while (i < n){
        sorted.push(collection_1[i]);
        i++;
    }
    while(j < m){
        sorted.push(collection_2[j]);
        j++;
    }
    while(k >= 0){
        sorted.push(collection_3[k]);
        k--;
    }
    
    return sorted;

}