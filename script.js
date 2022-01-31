const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let data = [
    {name: 'Contas Fixas', value: 5300},
    {name: 'Condomínio', value: 235},
    {name: 'Cartões', value: 2500},
    {name: 'Sabesp', value: 95},
    {name: 'CPFL', value: 350},
    {name: 'Internet', value: 99.99},
];

addEventListener("DOMContentLoaded", () => {

    let totalValue = data.reduce( (tot, accum) => {
        return tot + accum.value
    }, 0);

    let startAngle = 0;
    let radius = 120;
    let cx = canvas.width / 2;
    let cy = canvas.height / 2;

    data.forEach( (dataValue) => {
        
        ctx.fillStyle = `hsla(${Math.random() * 360}, 50%, 50%, 1)`;
        ctx.lineWidth = 1
        ctx.strokeStyle = '#e0e0e0';
        ctx.beginPath();

        let endAngle = ((dataValue.value / totalValue) * Math.PI * 2) + startAngle;
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, endAngle, false);
        ctx.lineTo(cx, cy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Add the legends
        ctx.beginPath
        ctx.font = "14px Arial, Calibri";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";

        let theta = (startAngle + endAngle) / 2;
        let deltaY = Math.sin(theta) * 1.5 * radius;
        let deltaX = Math.cos(theta) * 1.5 * radius;
        ctx.fillText(dataValue.name, deltaX + cx, deltaY + cy);
        ctx.closePath();

        startAngle = endAngle;
    })

})