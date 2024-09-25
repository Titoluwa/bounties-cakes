"use client"

import Image from "next/image";
import { Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cakes() {
  return (
    <div>
        <p className="text-7xl text-center font-bold text-violet-700 m-4 mt-14">BUDGET CAKES</p>
        <div className="flex space-x-6 justify-center p-5 m-5">
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-violet-600">Bluberry Cake</CardTitle>
                    <CardDescription>
                    Best Bluberry cake you have ever tasted... Try it!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-2 justify-items-center">
                        <Image alt="Product image" className="aspect-square w-64 mb-4 rounded-md object-cover" height="400" src="/assets/images/cake-1.jpg" width="400" />
                        <div className="grid grid-cols-3 gap-2 pb-5">
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-4.jpg" width="84"/>
                            </button>
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-2.jpg" width="84"/>
                            </button>
                            <button className="flex aspect-square w-24 items-center justify-center rounded-md border border-dashed">
                                <Upload className="h-4 w-4 text-muted-foreground" />
                                <span className="sr-only">Upload</span>
                            </button>
                        </div>
                        <div>
                            <Button variant={"default"}>Buy</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-violet-600">Red Velvet Cake</CardTitle>
                    <CardDescription>
                        Best Red Velvet cake you have ever tasted... Try it!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-2 justify-items-center">
                        <Image alt="Product image" className="aspect-square w-64 mb-4 rounded-md object-cover" height="300" src="/assets/images/cake-5.jpg" width="300" />
                        <div className="grid grid-cols-3 gap-2 pb-5">
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-6.jpg" width="84"/>
                            </button>
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-3.jpg" width="84"/>
                            </button>
                        </div>
                        <div>
                            <Button variant={"default"}>Buy</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-violet-600">Chocolate Cake</CardTitle>
                    <CardDescription>
                        Best Chocolate Cake you have ever tasted... Try it!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-2 justify-items-center">
                        <Image alt="Product image" className="aspect-square w-64 mb-4 rounded-md object-cover" height="300" src="/assets/images/cake-2.jpg" width="300" />
                        <div className="grid grid-cols-3 gap-2 pb-5">
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-3.jpg" width="84"/>
                            </button>
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-4.jpg" width="84"/>
                            </button>
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-1.jpg" width="84"/>
                            </button>
                        </div>
                        <div>
                            <Button variant={"default"}>Buy</Button>
                        </div>
                    </div>
                    
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-violet-600">Red Velvet Cake</CardTitle>
                    <CardDescription>
                        Best Red Velvet cake you have ever tasted... Try it!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-2 justify-items-center">
                        <Image alt="Product image" className="aspect-square w-64 mb-4 rounded-md object-cover" height="300" src="/assets/images/cake-5.jpg" width="300" />
                        <div className="grid grid-cols-3 gap-2 pb-5">
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-6.jpg" width="84"/>
                            </button>
                            <button>
                                <Image alt="Product image" className="aspect-square w-20 rounded-md object-cover" height="84" src="/assets/images/cake-3.jpg" width="84"/>
                            </button>
                        </div>
                        <div>
                            <Button>Buy</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>


  )
}
