let combustivel = require("./combustivel")

test("Carro vai andar por 110km com 10 litros de etanol", ()=>{
    expect(combustivel.calculo(110, "etanol")).toBe(10)
})