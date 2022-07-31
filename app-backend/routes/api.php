<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\KeyController;
use App\Http\Controllers\Api\TechnicianController;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [LoginController::class, 'login'])->name('login');

//Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('orders', \Api\OrderController::class);
    Route::get('keys', [KeyController::class, 'index'])->name('keys.index');
    Route::get('technicians', [TechnicianController::class, 'index'])->name('technicians.index');
 //});
