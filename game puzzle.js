let number=0;
function change01(value)
{
    number+=value;
    if(number%3==1)
    {
        document.getElementById('01').src='https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg';
    }
    if(number%3==2)
    {
        document.getElementById('01').src='https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg';
    }
    if(number%3==0)
    {
        document.getElementById('01').src='https://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg';
    }
    check();}
let number02=0;
function change02(value)
{
    number02+=value;
    if(number02%3==1)
    {
        document.getElementById('02').src='https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg';
    }
    if(number02%3==2)
    {
        document.getElementById('02').src='https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg';
    }
    if(number02%3==0)
    {
        document.getElementById('02').src='https://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg';
    }
    check();
}
let number03=0;
function change03(value)
{
    number03+=value;
    if(number03%3==1)
    {
        document.getElementById('03').src='https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg';
    }
    if(number03%3==2)
    {
        document.getElementById('03').src='https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg';
    }
    if(number03%3==0)
    {
        document.getElementById('03').src='https://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg';
    }
    check();
}
let number04=0;
function change04(value)
{
    number04+=value;
    if(number04%3==1)
    {
        document.getElementById('04').src='https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg';
    }
    if(number04%3==2)
    {
        document.getElementById('04').src='https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg';
    }
    if(number04%3==0)
    {
        document.getElementById('04').src='https://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg';
    }
    check();
}
let number05=0;
function change05(value) {
    number05 += value;
    if (number05 % 3 == 1) {
        document.getElementById('05').src = 'https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg';
    }
    if (number05 % 3 == 2) {
        document.getElementById('05').src = 'https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg';
    }
    if (number05 % 3 == 0) {
        document.getElementById('05').src = 'https://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg';
    }
    check();
}
function check()
{
    let check01=number%3;
    let check02=number02%3;
    let check03=number03%3;
    let check04=number04%3;
    let check05=number05%3;
    if((check01==check02)&&(check02==check03)&&(check03==check04)&&(check04==check05))
    {
        document.getElementById('output').innerHTML='YOU WIN !!!';
    }
    else
    {
        document.getElementById('output').innerHTML='';
    }
}