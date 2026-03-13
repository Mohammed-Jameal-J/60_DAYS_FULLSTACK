'use client'

import { useActionState } from "react"
import { signUp } from "@/app/actions/auth-actions"

export default function RegisterPage() {
    const [state, action , pending] = useActionState(signUp, undefined)

    return (
        <div>
            <form action={action}>
                <h1>Create Account</h1>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button disabled={pending} type="submit">Register</button>
                {state?.message && <p>{state.message}</p>}
                
            </form>
        </div>
    )
}