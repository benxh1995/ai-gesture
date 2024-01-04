import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgePlus, Check, Equal, Megaphone, Share, X } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "sonner";


function Ranking() {
    const [chosen, setChosen] = useState(null) // [1 or 2]
    const selected = (number) => {
        toast.success("Selected " + number)
        setChosen(number)
    }

    const loadNew = (e) => {
        toast.success("Loaded new")
    }

    return (
        <>
            <Toaster closeButton theme="dark" />
            <div className="container mx-auto mt-4">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Rank
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Please follow the guidelines when ranking models.
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outline" className="w-full" onClick={() => { loadNew() }}>
                            <BadgePlus className="mr-2 h-4 w-4" /> Load new
                        </Button>
                    </div>
                </div>
                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                How do you calculate the area of a circle?
                            </CardTitle>
                            <CardDescription>
                                Please choose which response you think is better for the prompt.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Alert className="mb-4" variant="faded">
                                <Megaphone className="h-4 w-4" />
                                <AlertTitle>Context</AlertTitle>
                                <AlertDescription>
                                    A circle is a shape with all points the same distance from its center. The distance around a circle is called the circumference of the circle. The distance across a circle through its center is called its diameter.
                                </AlertDescription>

                            </Alert>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className={`p-4 space-y-4 rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground cursor-pointer ${chosen == "1" ? "bg-accent text-accent-foreground" : "bg-background"}`} onClick={() => { selected("1") }}>
                                    <p>The area of a circle is a fundamental concept in geometry, calculated using the formula A = πr², where π represents the mathematical constant pi, and r is the radius of the circle [20]. This formula is derived from the relationship between the circumference and the diameter of a circle, which is always a constant ratio, approximately 3.14159, regardless of the circle&apos;s size [15].</p>
                                    <p>To find the area of a circle, one can use various methods. The most direct approach is to measure the radius and plug it into the formula [20]. However, if the radius is unknown, but the diameter or circumference is known, one can still calculate the area by using the relationships between these measurements [10]. For example, if the circumference is known, one can use the formula for circumference (c = πd) and solve for the radius or diameter [12].</p>
                                    <p>In summary, calculating the area of a circle is a straightforward process that involves applying the correct formula with the given measurements. This calculation is essential in many fields, from architecture to engineering, where circular shapes are common [20].</p>
                                </div>
                                <div className={`p-4 space-y-4 rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground cursor-pointer ${chosen == "2" ? "bg-accent text-accent-foreground" : "bg-background"}`} onClick={() => { selected("2") }}>
                                    <p>The area of a circle can be calculated using the formula: </p>
                                    <p>Area = π × r² where: </p>
                                    <p>π (pi) is a mathematical constant approximately equal to 3.14159, and </p>
                                    <p> r is the radius of the circle. </p>
                                    <p>The radius is the distance from the center of the circle to any point on its circumference. If you know the diameter of the circle instead of the radius, you can still use this formula by dividing the diameter by 2 to find the radius, since the diameter is always twice the radius.</p>
                                </div>
                            </div>

                                <div className={`flex items-center justify-center mt-4 p-4 space-y-4 rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground cursor-pointer ${chosen == "tie" ? "bg-accent text-accent-foreground" : "bg-background"}`} onClick={() => { selected("tie") }}>

                                    <Equal className="mr-2 h-4 w-4" /> Same

                                </div>

                            {chosen && chosen != null ?
                                <div className="flex justify-between items-center mt-4">
                                    <Button variant="default" className="w-full" onClick={() => { submitChoice() }}>
                                        <Check className="mr-2 h-4 w-4" /> Submit
                                    </Button>
                                </div> : null}


                        </CardContent>
                    </Card>
                    {/* ranking WDL between 2 + select 1 functionality */}
                </div>
                <div className="mt-4">
                    {/* ranking 2, but with multiple degrees of liking which most */}
                </div>
                <div className="mt-4">
                    {/* assist by annotating the answer */}
                </div>
            </div >
        </>
    )
}
export default Ranking;