var i = 0;
var txt1 = `
Heluu Mahaal, >>

This is what my introvert butt was trying to share yesterday. Mannn I kinda suck at> 
pulling off smooth pickup lines or kick ass conversations. Um.. but yk.. I've have>
my own way of expressing myself. My heart overflows with love and adoration for you. >
I find myself in awe of the beautiful connection we share, and I am compelled to put >
my feelings into words. >>

From the moment we started chatting, there was an instant sense of familiarity, as >
if we had known each other for a lifetime. The words flowed effortlessly, and our >
conversation became a tapestry of shared thoughts, laughter, and heartfelt moments. >
It was a glimpse into a world where two souls could connect and understand each >
other on a profound level. >>

Mahal, you know, your smile is among the prettiest things I've seen in my life 😄. I> 
can only wonder how much more pretty it can be in real life 😍. Ughhh, I envy people who>
get to see you everyday. I wanna hold your hand and feel like the luckiest man in the world.>
You are a treasure and am only gonna keep you in the deepest parts of my heart. I know you>
have been through a lot of bad times all alone, I wish I was there by your side. You>
are such a strong woman, mahal. I wanna hug you and never let go off you that's how precious>
you are to me.>>

You deserve to be pampered with all the love and care that this world has to offer. Just >
as you willingly give pieces of your heart to those around you, it's crucial that you >
reserve some of that love for yourself. Take the time to nurture your soul, to engage >
in activities that bring you joy, and to embrace the beauty of self-discovery. >>

Wish I could meet you right away, ughh. I wanna know more about youuu. Spend more time with you >
and see how things goo 😁 >>

What's in it for ya? Um.. you'll be getting a kid like friend, who would sing songs for you, >
send you a nice breakfast when you are sick, write letters for ya, hold your hand everytime he > 
meets you, hear you out when you have a bad day... can't spill all my secrets but yeah, basically >
would exist in your life as a bestiee 😁. You can trust me on that, I've been with that idiot for >
24 years now ✌️ >> 

Lovee youuuu a lottttt mahal.

`
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
