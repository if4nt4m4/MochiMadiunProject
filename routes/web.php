<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Landing/Index');
Route::inertia('/About', 'Landing/Aboutus');

require __DIR__.'/auth.php';
