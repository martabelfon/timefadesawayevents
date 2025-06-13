import React, { ReactNode } from "react";
import { ColorAnimationBackground } from "@/atoms/ ColorAnimationBackground";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// FondoEstrellas: fondo animado fijo, contenido scrollable
// Uso: <FondoEstrellas><ContenidoScroll /></FondoEstrellas>

type FondoEstrellasProps = {
    children: ReactNode;
    className?: string;
};

// Fondo animado fijo y contenido scrollable
const FondoEstrellas: React.FC<FondoEstrellasProps> = ({ children }) => (
    <>
        {/* Fondo animado fijo, sin bloquear eventos */}
        <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
            <ColorAnimationBackground className="w-full h-full">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </ColorAnimationBackground>
        </div>
        {/* Contenido scrollable sobre el fondo */}
        <div className="relative z-10 w-full min-h-screen">
            {children}
        </div>
    </>
);

export default FondoEstrellas;
