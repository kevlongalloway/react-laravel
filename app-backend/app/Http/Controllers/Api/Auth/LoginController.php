<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Arr;
use App\Http\Requests\LoginRequest;
use Lang;

class LoginController extends Controller
{
    protected $failedLoginResponse = [
        'success' => false,
        'errors' => 'These credentials do not match our records.'
    ];

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        try{
            $user = User::where('email', $request->email)->firstOrFail();
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json($this->failedLoginResponse);
        }

        //check password
        if (!Hash::check($request->password, $user->password)) {
            return [$user->password, Hash::make($user->password)];
            return response()->json($this->failedLoginResponse);
        }

        return response()->json([
            'success' => true,
            'token' => $user->createToken('token')->plainTextToken
        ]);
    }
}
