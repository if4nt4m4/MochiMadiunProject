<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Landing/Index');
Route::inertia('/About', 'Landing/Aboutus');
Route::inertia('/Products', 'Landing/Products');

require __DIR__.'/auth.php';
