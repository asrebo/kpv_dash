import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Obvestila() {
    return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Obvestila</CardTitle>
        <CardDescription className="text-md">Trenutno ni obvestil</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 flex justify-center items-center h-full">
        <div className="text-lg text-muted-foreground">
          <img src="mesage.png" alt="No Notifications" className="mx-auto mb-4 w-32 h-32 opacity-50" style={{opacity: 0.1}} />
        </div>
      </CardContent>
    </Card>
    )

}