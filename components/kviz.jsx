"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Zap } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image  from 'next/image';

const questions = [
  {
    id: 1,
    question: "Katera LED žarnica porabi najmanj energije za enako svetlost kot 60W klasična žarnica?",
    options: [
      { id: 'a', text: '60W LED žarnica', correct: false },
      { id: 'b', text: '8-10W LED žarnica', correct: true },
      { id: 'c', text: '30W LED žarnica', correct: false },
      { id: 'd', text: '45W LED žarnica', correct: false }
    ]
  },
  {
    id: 2,
    question: "Koliko energije lahko prihranite, če hladilnik nastavite na pravilno temperaturo (4-5°C)?",
    options: [
      { id: 'a', text: 'Ni pomembno, temperatura ne vpliva na porabo', correct: false },
      { id: 'b', text: 'Do 25% letne porabe', correct: true },
      { id: 'c', text: 'Samo 2-3% letne porabe', correct: false },
      { id: 'd', text: 'Višja temperatura vedno pomeni večjo porabo', correct: false }
    ]
  },
  {
    id: 3,
    question: "Koliko energije lahko prihranite z izolacijo strehe ali podstrešja?",
    options: [
      { id: 'a', text: 'Do 10% stroškov ogrevanja', correct: false },
      { id: 'b', text: 'Do 30% stroškov ogrevanja', correct: true },
      { id: 'c', text: 'Izolacija nima velikega vpliva', correct: false },
      { id: 'd', text: 'Samo 5% stroškov ogrevanja', correct: false }
    ]
  }
];

export default function EnergyQuiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      const selectedAnswer = selectedAnswers[question.id];
      const correctOption = question.options.find(opt => opt.correct);
      if (selectedAnswer === correctOption.id) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const isAnswerSelected = selectedAnswers[questions[currentQuestion]?.id];
  const percentage = Math.round((score / questions.length) * 100);

  // Splash screen
  if (!quizStarted) {
    return (
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-7xl">
          <CardHeader className="text-center space-y-6 py-12">
            <div className="flex justify-center">
              <div className="relative">
                  <DotLottieReact
                         src="./kviz.lottie"
                         loop
                         autoplay
                         style={{ width: '500px' }}
                       />
              
              </div>
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Kviz o učinkoviti rabi energije
            </CardTitle>
            <CardDescription className="text-lg">
              Preizkusite svoje znanje o varčevanju z energijo in prispevajte k bolj zelenemu jutri
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-600">3</p>
                <p className="text-sm text-gray-600">Vprašanja</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">~2</p>
                <p className="text-sm text-gray-600">Minuti</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-yellow-600">100%</p>
                <p className="text-sm text-gray-600">Cilj</p>
              </div>
            </div>
            <Alert className="border-green-500 bg-green-50">
              <Zap className="h-4 w-4 text-green-600" />
              <AlertTitle>Zakaj je to pomembno?</AlertTitle>
              <AlertDescription>
                Učinkovita raba energije zmanjšuje stroške, varuje okolje in prispeva k boljši prihodnosti za vse.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="pb-12">
            <Button 
              onClick={() => setQuizStarted(true)} 
              className="w-full" 
              size="lg"
            >
              Začni kviz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className=" flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-16 h-16 text-yellow-500" />
            </div>
            <CardTitle className="text-3xl">Rezultati kviza</CardTitle>
            <CardDescription>Poglejte, kako dobro poznate učinkovito rabo energije</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold  mb-2">
                {percentage >= 90 ? 10 : percentage >= 80 ? 8 : percentage >= 70 ? 6 : percentage >= 60 ? 4 : 2}
                
          
            
                <Image src="/coin.png" alt="" width={80} height={80} className="inline-block ml-2" />
              </div>
              <p className="text-xl text-gray-600">
                Pravilnih odgovorov: {score} od {questions.length}
              </p>
            </div>

            <Alert className={percentage >= 70 ? "border-green-500 bg-green-50" : "border-orange-500 bg-orange-50"}>
              <AlertTitle className="text-lg font-semibold">
                {percentage === 100 && "Odlično! Ste pravi energetski strokovnjak! 🌟"}
                {percentage >= 70 && percentage < 100 && "Zelo dobro! Poznate osnove učinkovite rabe energije! 👍"}
                {percentage >= 40 && percentage < 70 && "Dobro! Še nekaj prostora za izboljšave. 💡"}
                {percentage < 40 && "Poskusite znova! Vsak korak k boljšemu poznavanju šteje. 🔋"}
              </AlertTitle>
              <AlertDescription>
                Učinkovita raba energije je ključna za zmanjšanje stroškov in varovanje okolja.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Pregled odgovorov:</h3>
              {questions.map((question, idx) => {
                const selectedAnswer = selectedAnswers[question.id];
                const correctOption = question.options.find(opt => opt.correct);
                const isCorrect = selectedAnswer === correctOption.id;
                
                return (
                  <div key={question.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium mb-2">{idx + 1}. {question.question}</p>
                        <p className="text-sm text-green-700">
                          ✓ Pravilen odgovor: {correctOption.text}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-red-700">
                            ✗ Vaš odgovor: {question.options.find(opt => opt.id === selectedAnswer)?.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={restartQuiz} className="w-full" size="lg">
              Ponovite kviz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Vprašanje {currentQuestion + 1} od {questions.length}
            </span>
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-[var(--primary)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <CardTitle className="text-2xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[question.id] || ''}
            onValueChange={(value) => handleAnswerSelect(question.id, value)}
          >
            <div className="space-y-3">
              {question.options.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all hover:bg-gray-50 ${
                    selectedAnswers[question.id] === option.id ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleNext}
            disabled={!isAnswerSelected}
            className="w-full"
            size="lg"
          >
            {currentQuestion < questions.length - 1 ? 'Naslednje vprašanje' : 'Prikaži rezultate'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}