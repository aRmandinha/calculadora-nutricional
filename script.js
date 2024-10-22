function calculateCalories() {
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseInt(document.getElementById('height').value);
  const goal = document.getElementById('goal').value;
  
  let result = document.getElementById('result');
  
  let BMR = 10 * weight + 6.25 * height - 5 * age +5;
  
  let calories;
  let protein, carbs, fats;
  let mealSuggestions = "";
  let sleepRecommendation = "Recomenda-se dormir entre 7-9 horas por noite para otimizar a recuperação e o bem-estar";
  
  if (goal === "maintain") {
    calories = BMR * 1.55;
    protein = weight * 1.8;
    carbs = weight * 4;
    fats = weight * 1;
    
    mealSuggestions = `<p><strong> Sugestão de Cardápio para manter massa</strong></p>
    <ul>
      <li>Café da manhã: Omelete de claras (3 claras e 1 gema) com espinafre e tomate
1 fatia de pão integral com abacate
1 banana ou uma porção de frutas vermelhas
Café preto ou chá sem açúcar.</li>
     <li>Almoço:Peito de frango grelhado (150-200g)
Arroz integral (1/2 xícara) ou quinoa
Brócolis no vapor ou legumes assados
Salada verde com azeite de oliva e vinagre balsâmico.</li>
    <li>Lanche: Iogurte grego natural com uma colher de mel e sementes de chia
Punhado de nozes ou amêndoas.</li>
    <li>Jantar:Salmão grelhado (150-200g) ou filé de peixe
Batata-doce assada (1 batata média)
Aspargos ou abobrinha grelhada
Salada de rúcula com cenoura ralada e azeite.</li>
    </ul>`   
    ;
  } else if (goal === "gain"){
    calories = BMR * 1.2;
    protein = weight * 2;
    carbs = weight * 2;
    fats = weight * 0.7;
    
     mealSuggestions = `<p><strong> Sugestão de Cardápio para ganhar massa</strong></p>
    <ul>
      <li>Café da manhã:
      -Opção 1: omelete de claras(4 claras + 1 ovo inteiro)com espinafre,tomate e cebola.
-Opçaõ 2: Aveia com whey protein:40g de aveia + 1 scoop de whey protein(pode misturar com leite ou agua).
-Opção 3: 1 banana ou frutas vermelhas + 1 colher de chá de pasta de amendoim natural(opcional).</li>
     <li>Almoço: 150g de frango grelhado.
100g de arroz integral/branco ou batata-doce.
Salada de folhas verdes com tomate e pepino, 1 colher de azeite de olivia extravirgem.
100g de brócolis cozido.</li>
    <li>Lanche:
    -Opção 1: iogurte natural desnatado com 1 scoop de whey protein ou 20g de mix de olegionosas(castanhas,nozes,amêndoas)
-Opçaõ 2: 1 fatia de pão integral com 1 colher de sopa de pasta de amendoim ou queijo cottage ou doce de leite.</li>
    <li>Jantar: 
    -Opção 1: 150g de filé mignon grelhado ou carne magre(patinho,coxão mole).
-Opção 2: 100g de batata-doce assada ou purê de mandioquinha.
Brócolis no vapor e salada, temperar com azeite, limão e vinagre.</li>
    </ul>`    
     ;
  } else if (goal === "lose") {
    calories = BMR * 1.75;
    protein = weight * 2;
    carbs = weight * 5;
    fats = weight * 1;
    
     mealSuggestions = `<p><strong> Sugestão de Cardápio para perder peso</strong></p>
    <ul>
      <li>Café da manhã: 
      -Opção 1: iogurte natural desnatado com 1 colher de sopa de chia + 1 banana.
-Opção 2:Omelete com 2 claras e 1 gema + 1 fatia de pão integral.      </li>
     <li>Almoço:
     -Opção 1: filé de peixe assado (tilápia ou salmão) + 1 batata-doce pequena cozida ou assada + brócolis.
-Opção 2: Salada-de-grão de bico(1 xícara)com cebola, pimentão,pepino e salsa + 1 filé de peito de frango grelhado.     </li>
    <li>Lanche:
    -Opção 1: 1 fruta com 1 colher de pasta de amendoim.
 -Opção 2: 1 fatia de pão integral com ricota ou cottage + 1 fatia de peito de peru.</li>
    <li>Jantar:
    -Opção 1: salmão grelhado com legumes cozidos + salada de folhas verdes,tomate e pepino.
    -Opção 2: 100g de frango grelhado + 1 xícara de quinoa + salada de folhas com tomate, pepino e cenoura.</li>
    </ul>`    
    ;
 }
 result.innerHTML =`
 <p> Sua necessidade calórica diária estimada é de ${calories.toFixed(2)} calorias.</p>
 
 <p> Para atingir seu objetivo, você deve ingerir: </p>
 <ul>
    <li>${protein.toFixed(2)}g de proteínas por dia. </li>
    <li>${protein.toFixed(2)}g de carboidratos  por dia. </li>
    <li>${protein.toFixed(2)}g de gorduras por dia. </li>
 </ul>
 
 
 ${mealSuggestions}
 <p>${sleepRecommendation}</p>
 <p><strong>Hidratação:</strong> tente beber cerca de ${(weight * 0.035).toFixed(2)} litros de água por dia</p>
 
 `
 }
