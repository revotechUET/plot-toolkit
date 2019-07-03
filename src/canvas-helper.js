module.exports = CanvasHelper;
function CanvasHelper(ctx, config) {
    this.ctx = ctx;
    this.fillStyle = config.fillStyle || 'transparent';
    this.strokeStyle = config.strokeStyle || 'blue';
    this.lineWidth = config.lineWidth || 1;
    this.lineDash = config.lineDash || null;
    this.size = config.size/4 || 2;
}

/************* CANVAS Drawing functions ****************/
CanvasHelper.prototype.circle = function(x, y, opts = {}) {
    prepare(this, opts);
    let r = opts.pointSize || this.size;
    this.ctx.arc(x, y, r, 0, Math.PI*2, true);
    draw(this);
}

CanvasHelper.prototype.square = function(x, y, opts = {}) {
    prepare(this, opts);
    let a = opts.pointSize || this.size;
    this.ctx.rect(x-a, y-a, a*2, a*2);
    draw(this);
}

CanvasHelper.prototype.cross = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.moveTo(x-d, y-d);
    this.ctx.lineTo(x+d, y+d);
    this.ctx.moveTo(x-d, y+d);
    this.ctx.lineTo(x+d, y-d);
    draw(this);
}

CanvasHelper.prototype.diamond = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.moveTo(x-d, y);
    this.ctx.lineTo(x, y+d);
    this.ctx.lineTo(x+d, y);
    this.ctx.lineTo(x, y-d);
    this.ctx.closePath();
    draw(this);
}

CanvasHelper.prototype.plus = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.moveTo(x-d, y);
    this.ctx.lineTo(x+d, y);
    this.ctx.moveTo(x, y-d);
    this.ctx.lineTo(x, y+d);
    draw(this);
}

CanvasHelper.prototype.star = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.translate(x, y);
    for (let i = 0; i < 3; i ++) {
        this.ctx.rotate(Math.PI / 3);
        this.ctx.moveTo(-d, 0)
        this.ctx.lineTo(+d, 0);
    }
    draw(this);
}

CanvasHelper.prototype.textSymbol = function (x, y, opts = {}) {
    if (!opts.textContent) return;
    let s = opts.textSize || 10;
    this.ctx.save();
    this.ctx.font = `${s}px ${opts.fontFamily || 'Verdana'}`;
    this.ctx.textBaseline = opts.verticalAlign || 'top';
    this.ctx.fillStyle = opts.fillStyle || this.fillStyle;
    this.ctx.fillText(opts.textContent, x, y);
    this.ctx.restore();
}

CanvasHelper.prototype.rect = function(x, y, width, height, opts = {}) {
    prepare(this, opts);
    this.ctx.rect(x, y, width, height);
    draw(this);
}

CanvasHelper.prototype.segment = function(start, stop) {
    console.log(start, stop);
}
/********************** END *********************/
function prepare(canvas, opts = {}) {
    let ctx = canvas.ctx;
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = opts.fillStyle || canvas.fillStyle;
    ctx.strokeStyle = opts.strokeStyle || canvas.strokeStyle;
    ctx.lineWidth = opts.lineWidth || canvas.lineWidth;
    let lineDash = opts.lineDash || canvas.lineDash;
    if (lineDash)
        ctx.setLineDash(lineDash);
}

function draw(canvas) {
    let ctx = canvas.ctx;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
