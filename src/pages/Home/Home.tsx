import React from "react";
import { useNavigate } from 'react-router-dom'

import '@styles/home.sass';

import Section from "@components/Section";
import ToolCard from "@components/ToolCard";
import GardenCard from "@components/GardenCard";

const tools = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vite', icon: '⚡' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'Sass', icon: '🎀' },
    { name: 'GitHub', icon: '🐙' },
]

const gardens = [
    {
      name: 'The Marble Cemetery',
      description: 'A silent church among angel statues — where grief waits to be lifted.',
      icon: '🕊️'
    },
    {
      name: 'Cliff with a Sakura Tree',
      description: 'Where Cheporté stargazes, lost in dreams and dusk.',
      icon: '🌸'
    },
    {
      name: 'The Coral Woods',
      description: 'A glowing forest of crystal trees and butterflies.',
      icon: '🦋'
    }
]

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="hero">
                <h1>Bienvenue dans le Jardin de Cheporté</h1>
                <p>Un monde où les rêves se rencontrent et la brume raconte des histoires.</p>
            </div>

            <Section title="À propos du Jardin">
                <p>
                Misty Gardens is a place born from solitude — a quiet refuge built by Cheporté, where each step
                is a whisper of memories, loss, and gentle hope. It is not a place to escape, but to remember
                and feel deeply.
                </p>
            </Section>

            <Section title="Tools I Use">
                <div className="tools-grid">
                    {tools.map((tool) => (
                       <ToolCard key={tool.name} name={tool.name} icon={tool.icon} />
                    ))}
                </div>
            </Section>

            <Section title="A Glimpse Into the Gardens">
                <div className="gardens-grid">
                    {gardens.map((g) => (
                        <GardenCard key={g.name} {...g} />
                    ))}
                </div>
            </Section>
            <Section>
                <div className="philosophy">
                    <blockquote>
                        <p>“I built the gardens not to escape the world, but to remember it differently.”</p>
                        <footer>— Cheporté</footer>
                    </blockquote>

                    <p className="explore-text">
                        Come walk the paths I've paved — in code, and in feeling.
                    </p>

                    <button className="enter-button" onClick={() => navigate('/garden')}>
                        Enter the Gardens
                    </button>
                </div>
            </Section>
        </div>
    );
}

export default Home;