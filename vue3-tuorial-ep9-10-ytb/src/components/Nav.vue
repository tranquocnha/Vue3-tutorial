<template>
  <nav class="nav">
    <router-link :to="{ name: 'over-view' }"> OverView</router-link>
    <router-link :to="{ name: 'transaction-route' }"> Transition</router-link>
    <router-link to="/"> Budgets</router-link>
    <router-link to="/"> Reports</router-link>
    <router-link to="/"> Setting</router-link>
  </nav>
</template>
