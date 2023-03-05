import { create } from "zustand";
import { auth } from "@/app/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";

export type User = {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    emailVerified: boolean;
};

interface AuthStore {
    user: User | null;
    signUp: (email: string, password: string) => Promise<boolean>;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    
    signUp: async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            console.error("Error signing up:", error);
            return false;
        }
    },
    
    signIn: async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            console.error("Error signing in:", error);
            return false;
        }
    },
    
    signOut: async () => {
        await signOut(auth);
        set({ user: null });
    }
}));

export default useAuthStore;
