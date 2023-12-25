import { Button } from "@/components/ui/button";
import { Check, Share, X } from "lucide-react";
import { useState } from "react";


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
import Link from "next/link";

const data = [
    {
        "name": "GPT-4",
        "benchmark": {
            "average": 90.06,
            "HumanEval": 86,
            "Coherence": 93,
            "Logic": 91,
            "CommonSense": 89,
            "FactualAccuracy": 90,
        },
        "elo": 1260,
        "model-name": "openai/gpt-4",
        "author": "OpenAI",
        "available": false,
    },
    {
        "name": "Gemini Ultra",
        "benchmark": {
            "average": 90.06,
            "HumanEval": 86,
            "Coherence": 93,
            "Logic": 91,
            "CommonSense": 89,
            "FactualAccuracy": 90,
        },
        "elo": 1100,
        "model-name": "google/gemini-ultra",
        "author": "Google",
        "available": false,
    },
    {
        "name": "Open Hermes 2.5",
        "benchmark": {
            "average": 90.06,
            "HumanEval": 86,
            "Coherence": 93,
            "Logic": 91,
            "CommonSense": 89,
            "FactualAccuracy": 90,
        },
        "elo": 1000,
        "model-name": "teknium/open-hermes-2.5",
        "author": "Teknium",
        "available": true,
    }
]

function Results() {

    return (
        <div className="container mx-auto mt-4">
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Results
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Enjoy exploring the results of the benchmark, sorted by human preference.
                    </p>
                </div>
                <div className="flex space-x-2">
                    {/* TODO: Add Dropdown/share functionality */}
                    <Button variant="outline" size="icon">
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                    </Button>
                </div>
            </div>
            <div className="mt-6">
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
                                Average Benchmarks
                            </TableHead>
                            <TableHead>
                                HumanEval
                            </TableHead>
                            <TableHead>
                                Coherence
                            </TableHead>
                            <TableHead>
                                Logic
                            </TableHead>
                            <TableHead>
                                CommonSense
                            </TableHead>
                            <TableHead>
                                FactualAccuracy
                            </TableHead>
                            <TableHead>
                                Open Source
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
                                    {model?.benchmark?.average}
                                </TableCell>
                                <TableCell>
                                    {model?.benchmark?.HumanEval}
                                </TableCell>
                                <TableCell>
                                    {model?.benchmark?.Coherence}
                                </TableCell>
                                <TableCell>
                                    {model?.benchmark?.Logic}
                                </TableCell>
                                <TableCell>
                                    {model?.benchmark?.CommonSense}
                                </TableCell>
                                <TableCell>
                                    {model?.benchmark?.FactualAccuracy}
                                </TableCell>
                                <TableCell>
                                    {model?.available ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
                Do you want to add your model to the benchmark? <Link href="/contact" className="text-primary hover:underline hover:underline-offset-4" >Contact Us</Link>
            </div>
        </div>
    );
}

export default Results;
