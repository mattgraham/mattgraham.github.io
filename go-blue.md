---
title: Go Blue
sub_title: 2024 Michigan Football Schedule
layout: post_custom
permalink: goblue
---

{% include post-title.html %}

<!-- TO DO -->
<div class="">
    {% for team in site.data.team.first %}
        {% if team.record == blank %}
            {{ team.record }}
        {% endif %}
    {% endfor %}
</div>

<div class="grid grid-cols-1 gap-5 mb-12">
    {% for item in site.data.michigan_football.events %}
    <a href="{{item.links[0].href}}" target="_blank" class="relative game-card no-underline border p-3 rounded-lg text-center
        {% if item.competitions.first.competitors.first.team.id == "130" %}
            home
        {% else %}
            away
        {% endif %}
    ">

        {% if item.competitions.first.competitors[1].team.shortDisplayName == 'Fresno St' %}
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded text-white border-4 border-white p-1 text-xs flex items-center justify-center font-semibold mx-auto">MG / CV</div>
        {% elsif item.competitions.first.competitors[1].team.shortDisplayName == 'Texas' %}
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded text-white border-4 border-white p-1 text-xs flex items-center justify-center font-semibold mx-auto">Sold</div>
        {% elsif item.competitions.first.competitors[1].team.shortDisplayName == 'Arkansas St' %}
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded text-white border-4 border-white p-1 text-xs flex items-center justify-center font-semibold mx-auto">SF / RF</div>
        {% elsif item.competitions.first.competitors[1].team.shortDisplayName == 'USC' %}
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded text-white border-4 border-white p-1 text-xs flex items-center justify-center font-semibold mx-auto">MG / TG</div>
            {% elsif item.competitions.first.competitors[1].team.shortDisplayName == 'Michigan St' %}
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded text-white border-4 border-white p-1 text-xs flex items-center justify-center font-semibold mx-auto">MG / SG</div>
        {% endif %}

        <div class="flex items-center lg:gap-2">
            <div class="text-left flex flex-col lg:flex-row items-center col-span-2">
                {% if item.competitions.first.competitors.first.team.id == "130" %}
                    <img src="{{item.competitions.first.competitors[1].team.logos.first.href}}" alt="{{item.competitions.first.competitors[1].team.name}}" class="order-1 h-12 lg:h-16 mx-3">
                {% else %}
                    <img src="{{item.competitions.first.competitors[1].team.logos.first.href}}" alt="{{item.competitions.first.competitors[1].team.name}}" class="order-1 h-12 lg:h-16 mx-3">
                {% endif %}
                <div class="order-2 lg:order-1 font-bold flex-auto flex gap-2">
                    {%if item.competitions.first.competitors[1].curatedRank.current < 26 %}<span class="text-xs mr-1">#{{item.competitions.first.competitors[1].curatedRank.current}}</span>{% endif %}
                    {{item.competitions.first.competitors[1].team.shortDisplayName}}
                    <span class="hidden md:flex font-normal">(0-0)</span>
                    <div class="flex-auto"></div>
                </div>
            </div>
            <div class="flex-auto col-span-6 flex flex-col text-sm">
                <div class="flex-auto"></div>
                <div class="hidden lg:flex mx-auto tracking-wide font-bold font-base">{{item.name}}</div>
                {% if item.competitions.first.status.displayClock != '0:00' %}
                <div class="gap-2">
                    <span>{{ item.competitions.first.status.displayClock }}</span>
                    <span>{{ item.competitions.first.status.period }} Qtr0</span>
                </div>
                {% else %}
                <div>
                    {{item.date | date: "%b %d"}} -  
                    {% if item.timeValid == true %}
                        {{item.date | date_to_rfc822 | date: '%I:%M %Z' }}
                    {% else %}
                        TBD
                    {% endif %}
                </div>
                {% endif %}
                <div>{{item.competitions.first.venue.fullName}}</div>
                <div>{{item.competitions.first.venue.address.city}}, {{item.competitions.first.venue.address.state}}</div>
                <div class="flex-auto"></div>
            </div>
            <div class="text-right flex flex-col lg:flex-row items-center col-span-2">
                <div class="order-2 lg:order-1 font-bold flex-auto flex text-right gap-2">
                    <div class="flex-auto"></div>
                    {%if item.competitions.first.competitors[0].curatedRank.current < 26 %}<span class="text-xs mr-1">#{{item.competitions.first.competitors[0].curatedRank.current}}</span>{% endif %}
                    {{item.competitions.first.competitors[0].team.shortDisplayName}}
                    <span class="hidden md:flex font-normal">(0-0)</span>
                </div>
                {% if item.competitions.first.competitors.first.team.id == "130" %}
                    <img src="{{item.competitions.first.competitors[0].team.logos.first.href}}" alt="{{item.competitions.first.competitors[0].team.name}}" class="order-1 h-12 lg:h-16 mx-3">
                {% else %}
                    <img src="{{item.competitions.first.competitors[0].team.logos.first.href}}" alt="{{item.competitions.first.competitors[0].team.name}}" class="h-12 order-1 lg:h-16 mx-3">
                {% endif %}
            </div>
        </div>
    
        
        <div>{{item.time_start | date: "%I:%M %p"}}</div>
        <div>{{item.building_name}}</div>
    </a>
    {% endfor %}
</div>

