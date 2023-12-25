import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchCheckIcon, ClipboardSignatureIcon, Share, Check, X } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = [
    {
        "name": "GPT-4",
        "benchmark": 90.06,
        "elo": 1260,
        "model-name": "openai/gpt-4",
        "author": "OpenAI",
        "available": false,
    },
    {
        "name": "Gemini Ultra",
        "benchmark": 89.55,
        "elo": 1100,
        "model-name": "google/gemini-ultra",
        "author": "Google",
        "available": false,
    },
    {
        "name": "Open Hermes 2.5",
        "benchmark": 68.70,
        "elo": 1000,
        "model-name": "teknium/open-hermes-2.5",
        "author": "Teknium",
        "available": true,
    }
]

function IndexPage() {

    return (
        <div className="container mx-auto mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Card>
                    <CardHeader>
                        <CardTitle>Add Prompt</CardTitle>
                        <CardDescription>
                            Contribute to the benchmark by adding a prompt.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-1 my-2">
                            <p>
                                We are currently looking for prompts in the following domains:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    <strong>Reasoning</strong>
                                </li>
                                <li>
                                    <strong>Law</strong>
                                </li>
                                <li>
                                    <strong>Medicine</strong>
                                </li>
                                <li>
                                    <strong>Engineering</strong>
                                </li>
                                <li>
                                    <strong>Programming</strong>
                                </li>
                                <li>
                                    <strong>Mathematics</strong>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <Share className="mr-2 h-4 w-4" /> Add a prompt
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Ranking</CardTitle>
                        <CardDescription>
                            Help in ranking the models.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-1 my-2">
                            <p>
                                Please follow the guidelines on ranking models.
                            </p>
                            <p className="italic">
                                A quick summary of the guidelines:
                            </p>
                        </div>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>Rank your preference</strong> to the answers presented.
                            </li>
                            <li>
                                <strong>Follow your inuition</strong> when ranking the answers.
                            </li>
                            <li>
                                <strong>Alert the team</strong> if you find any issues.
                            </li>
                            <li>
                                <strong>Highlight the prompt</strong> if you find it offensive.
                            </li>
                            <li>
                                <strong>Show your support</strong> by sharing the project.
                            </li>
                            <li>
                                <strong>You will be banned</strong> if you abuse the system.
                            </li>
                        </ul>

                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <ClipboardSignatureIcon className="mr-2 h-4 w-4" /> Rank a model
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Results</CardTitle>
                        <CardDescription>
                            View the results of the models.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        Model
                                    </TableHead>
                                    <TableHead>
                                        Elo
                                    </TableHead>
                                    <TableHead>
                                        Available
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((model) => (
                                    <TableRow key={model?.name}>
                                        <TableCell>
                                            {model?.name}
                                        </TableCell>
                                        <TableCell>
                                            {model?.elo}
                                        </TableCell>
                                        <TableCell>
                                            {model?.available ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <SearchCheckIcon className="mr-2 h-4 w-4" /> See All
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default IndexPage;
