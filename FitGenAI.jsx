
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GymRoutineGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    height: '',
    age: '',
    gender: '',
    availableTime: '',
    activityType: 'gym',
    goals: '',
    dietPreferences: '',
    experienceLevel: '',
    physicalIssues: '',
    preferredWorkoutTime: '',
    mealsPerDay: '',
    equipmentPreference: ''
  });

  const [routine, setRoutine] = useState('');
  const [diet, setDiet] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, weight, height, age, gender, availableTime, activityType, goals, dietPreferences } = formData;

    let generatedRoutine = '';
    let generatedDiet = '';

    if (activityType === 'gym') {
      generatedRoutine = `Rutina de gimnasio para ${name}:
- Lunes: Pierna y glúteo
  - Sentadilla con barra: 4x10
  - Peso muerto rumano: 3x12
  - Zancadas con mancuernas: 3x12 por pierna

- Miércoles: Espalda y bíceps
  - Pull-ups: 3x10
  - Remo con barra: 4x10
  - Curl de martillo: 3x12

- Viernes: Pecho y tríceps
  - Press banca: 4x10
  - Fondos: 3x12
  - Extensión de tríceps con cuerda: 3x15

Duración total semanal: ${availableTime} horas.`;
    } else if (activityType === 'yoga') {
      generatedRoutine = `Rutina de yoga para ${name}:
- 3 sesiones por semana de 45 minutos
- Posturas: Perro boca abajo, Guerrero I y II, Cobra, Niño
- Enfoque en respiración, flexibilidad y reducción del estrés.`;
    } else if (activityType === 'running') {
      generatedRoutine = `Rutina de running para ${name}:
- 4 sesiones por semana
  - Día 1: 3 km a ritmo suave
  - Día 2: 5 sprints de 400m con descanso
  - Día 3: 5 km a ritmo medio
  - Día 4: 30 minutos a ritmo constante
- Enfoque en resistencia y quema de grasa.`;
    } else if (activityType === 'stretching') {
      generatedRoutine = `Rutina de estiramientos para ${name}:
- Diario: 20 minutos
  - Cuádriceps, isquiotibiales, espalda baja y hombros
  - Técnica de respiración profunda y relajación`;
    }

    generatedDiet = `Plan alimenticio personalizado (${dietPreferences}):
- Desayuno: 100g de avena + 250g de yogurt griego + 1 plátano
- Snack: 30g nueces + 1 manzana
- Comida: 150g pechuga de pollo + 100g arroz integral + ensalada verde
- Cena: 120g salmón + vegetales al vapor + 1 taza de quinoa
- Hidratación: mínimo 2.5L de agua al día
- Suplementos sugeridos: Multivitamínico, proteína whey (opcional)`;

    setRoutine(generatedRoutine);
    setDiet(generatedDiet);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">FitGenAI</h1>
          <nav className="space-x-6">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-indigo-500">Inicio</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-indigo-500">Sobre Nosotros</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-indigo-500">Rutinas Inteligentes</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-indigo-500">Dietas Inteligentes</a>
          </nav>
        </div>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Tu Entrenador Personal con IA</h2>
        <p className="text-center mb-6 text-muted-foreground">Crea tu rutina de ejercicio y plan de dieta según tus metas y preferencias</p>

        <div className="space-y-4 bg-white shadow-md rounded-2xl p-6">
          <Input name="name" placeholder="Tu nombre" onChange={handleChange} />
          <Input name="weight" type="number" placeholder="Peso (kg)" onChange={handleChange} />
          <Input name="height" type="number" placeholder="Altura (cm)" onChange={handleChange} />
          <Input name="age" type="number" placeholder="Edad" onChange={handleChange} />
          <Input name="gender" placeholder="Género" onChange={handleChange} />
          <Input name="availableTime" type="number" placeholder="Horas disponibles a la semana" onChange={handleChange} />
          <select name="activityType" className="w-full border p-2 rounded-md" onChange={handleChange}>
            <option value="gym">🏋️ Gimnasio</option>
            <option value="yoga">🧘 Yoga</option>
            <option value="running">🏃 Running</option>
            <option value="stretching">🤸 Estiramientos</option>
          </select>
          <Input name="experienceLevel" placeholder="Nivel de experiencia (principiante, intermedio, avanzado)" onChange={handleChange} />
          <Input name="physicalIssues" placeholder="¿Tienes problemas físicos? (espalda, rodillas, etc.)" onChange={handleChange} />
          <Input name="preferredWorkoutTime" placeholder="Hora preferida para entrenar (mañana, tarde, noche)" onChange={handleChange} />
          <Input name="mealsPerDay" placeholder="¿Cuántas comidas haces al día?" onChange={handleChange} />
          <Input name="equipmentPreference" placeholder="¿Prefieres peso corporal, máquinas o mancuernas?" onChange={handleChange} />
          <Textarea name="goals" placeholder="¿Cuáles son tus objetivos?" onChange={handleChange} />
          <Textarea name="dietPreferences" placeholder="Preferencias o restricciones alimenticias" onChange={handleChange} />
          <Button onClick={handleSubmit} className="w-full">Generar rutina y dieta</Button>
        </div>

        {(routine || diet) && (
          <Tabs defaultValue="rutina" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="rutina">Rutina</TabsTrigger>
              <TabsTrigger value="dieta">Dieta</TabsTrigger>
            </TabsList>
            <TabsContent value="rutina">
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Tu Rutina Personalizada</h2>
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{routine}</pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dieta">
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Tu Plan de Alimentación</h2>
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{diet}</pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        <section className="mt-12 bg-indigo-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">🎁 Funciones Exclusivas para Suscriptores</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>📈 Guardar progreso semanal</li>
            <li>🏋️ Acceso a rutinas avanzadas</li>
            <li>🍽️ Recetas diarias automáticas con macros</li>
            <li>🛒 Generador de listas de compras</li>
            <li>🎥 Rutinas con video o animación</li>
            <li>💬 Chat de consulta (IA o entrenador humano)</li>
            <li>🔔 Recordatorios por correo o notificaciones push</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
