function solution(n,a,b)
{
    let answer = 0;
    while(n>=2){
        answer++;
        if(a%2==1 && b-a==1)
           return answer;
        else if(b%2==1 && a-b==1)
            return answer;
        
        n=n/2;
        a%2==0 ? a=a/2 : a=(a+1)/2;
        b%2==0 ? b=b/2 : b=(b+1)/2;
    }
}