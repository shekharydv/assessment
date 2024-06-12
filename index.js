function compareTriplets( [17 28 30] a, List[99 16 8] b) {
    List<Integer> result = new ArrayList<Integer>(2);
    for (int i = 0; i < 2; i++) {
        result.add(0);
    }
    for(int i=0;i<3;i++) {
        if(a.get(i)>b.get(i)) {
            result.set(0, result.get(0)+1);
        }
        else if(a.get(i)<b.get(i)) {
            result.set(1, result.get(1) + 1);
        }
    }
    return result;
}